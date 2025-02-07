import { Container } from "react-bootstrap";
import GalleriaFilm from "./GalleriaFilm";

const HomeFilm = () => {
  return (
    <Container fluid className="text-light px-0">
      <GalleriaFilm title="Movies" query="movie" />
      <GalleriaFilm title="Series" query="series" />
      <GalleriaFilm title="Star Wars" query="Star Wars" />
    </Container>
  );
};

export default HomeFilm;
