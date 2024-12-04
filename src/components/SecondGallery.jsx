import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const SecondGallery = () => {
  const [film, setFilm] = useState([]);

  const getFilm = () => {
    fetch("http://www.omdbapi.com/?apikey=5fd011cf&s=demon slayer")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nel reperimento dei dati!");
        }
      })
      .then((film) => {
        console.log(film);
        if (film.Search) {
          setFilm(film.Search.slice(0, 6));
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getFilm();
  }, []);

  return (
    <Container fluid>
      <Row xs={2} sm={2} md={3} xl={6} className="align-items-center">
        {film.map((film) => (
          <Col key={film.imdbID} id="card-img">
            <Card className="border-none border-dark rounded-4">
              <Card.Img
                src={film.Poster}
                alt={film.Title}
                className="rounded-3"
              />
            </Card>
            <Card.Title className="text-light fs-6">{film.Title}</Card.Title>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default SecondGallery;
