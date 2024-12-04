import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { BellFill } from "react-bootstrap-icons";
import { Search } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

const MyNav = () => (
  <Navbar expand="lg" bg="dark" data-bs-theme="dark">
    <Container fluid className="ms-5 me-5">
      <Navbar.Brand href="/home">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5977/5977590.png"
          height={130}
          className="ms-3 me-4"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/TvShows">Tv shows</NavLink>
          <NavLink to="/Movies">Movies</NavLink>
          <NavLink to="/Recently Added">Recently Added</NavLink>
          <NavLink to="/My List">My List</NavLink>
        </Nav>
        <Nav className="ms-auto mt-5 mb-5">
          <NavLink to="/home">
            <Search />
          </NavLink>
          <NavLink to="/features">KIDS</NavLink>
          <NavLink to="/pricing">
            <BellFill />
          </NavLink>
          <Dropdown>
            <Dropdown.Toggle
              className="align-items-baseline"
              variant="dark"
              id="dropdown-basic"
            >
              <img
                src="./src/assets/teenager.png"
                className="bg-danger me-1"
                id="icon-profile"
                alt=""
              />
            </Dropdown.Toggle>
            <Dropdown.Menu className="text-bg-dark-subtle" variant="dark">
              <Dropdown.Item href="//action-1">Account</Dropdown.Item>
              <Dropdown.Item href="//action-2">Gestisci Profili</Dropdown.Item>
              <Dropdown.Item href="//action-2">Impostazioni</Dropdown.Item>
              <Dropdown.Item href="//action-2">Lingua</Dropdown.Item>
              <Dropdown.Item href="//action-2">Chiudi sessione</Dropdown.Item>
              <Dropdown.Item href="//action-2">Aiuto e Supporto</Dropdown.Item>
              <Dropdown.Item href="//action-2">Esci da Netflix</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default MyNav;
