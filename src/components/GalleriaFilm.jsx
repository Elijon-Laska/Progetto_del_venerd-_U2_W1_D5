import { Component } from "react";
import { Container, Row, Col, Card, Spinner, Alert, Button } from "react-bootstrap";
import "./GalleriaFilm.css";

class GalleriaFilm extends Component {
  state = {
    movies: [],
    displayedMovies: [],
    hoveredMovieTitle: "",
    hoveredMovieYear: "",
    loading: true,
    error: null,
    currentIndex: 0,
  };

  fetchMovies = () => {
    fetch(`http://www.omdbapi.com/?apikey=efc305e5&s=${this.props.query}`)
      .then((response) => response.json())
      .then((data) => {
        let movies = data.Search || [];
        movies = this.mischiaArray(movies);
        this.setState({ movies, loading: false }, this.loadMoreMovies);
      })
      .catch((error) => {
        this.setState({ error: "Movies not found", loading: false });
        console.log(error);
      });
  };

  mischiaArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const arrayMischiato = Math.floor(Math.random() * (i + 1));
      [array[i], array[arrayMischiato]] = [array[arrayMischiato], array[i]];
    }
    return array;
  };

  getRandomMovies = (movies, count) => {
    const misti = movies.sort(() => 0.5 - Math.random());
    return misti.slice(0, count);
  };

  loadMoreMovies = () => {
    const { movies, currentIndex } = this.state;
    const newIndex = currentIndex + 6;
    const newMovies = movies.slice(currentIndex, newIndex);
    this.setState((prevState) => ({
      displayedMovies: [...prevState.displayedMovies, ...newMovies],
      currentIndex: newIndex,
    }));
  };

  handleMouseEnter = (title, year) => {
    this.setState({ hoveredMovieTitle: title, hoveredMovieYear: year });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredMovieTitle: "", hoveredMovieYear: "" });
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { title } = this.props;
    const { displayedMovies, hoveredMovieTitle, hoveredMovieYear, loading, error } = this.state;

    return (
      <Container fluid className="text-light px-0">
        <h4 className="ms-3">{title}</h4>
        {loading && (
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 mx-2">
            {[...Array(6)].map((_, index) => (
              <Col key={index} className="mb-2 text-center px-1">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </Col>
            ))}
          </Row>
        )}
        {error && <Alert variant="danger">{error}</Alert>}
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 mx-2">
          {displayedMovies.map((movie) => (
            <Col key={movie.imdbID} className="mb-2 text-center px-1">
              <Card
                className="movie-card"
                onMouseEnter={() => this.handleMouseEnter(movie.Title, movie.Year)}
                onMouseLeave={this.handleMouseLeave}
              >
                <Card.Img className="img-fluid movie-image" src={movie.Poster} alt={movie.Title} />
                {hoveredMovieTitle === movie.Title && hoveredMovieYear === movie.Year && (
                  <Card.Body>
                    <Card.Title className="movie-title">{movie.Title}</Card.Title>
                    <Card.Text className="movie-year">{movie.Year}</Card.Text>
                  </Card.Body>
                )}
              </Card>
            </Col>
          ))}
        </Row>
        {displayedMovies.length < this.state.movies.length && (
          <div className="text-center">
            <Button
              onClick={this.loadMoreMovies}
              variant="secondary"
              className="my-1"
              style={{ backgroundColor: "transparent", borderRadius: 0, minWidth: 100 }}
            >
              More
            </Button>
          </div>
        )}
      </Container>
    );
  }
}

export default GalleriaFilm;
