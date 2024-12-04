import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShows from "./components/TvShows";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/TvShows" element={<TvShows />} />
        </Routes>
      </BrowserRouter>
      <MyFooter />
    </>
  );
}

export default App;
