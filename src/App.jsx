import "./App.css";
import HomeFilm from "./components/HomeFilm";
import Footer from "./components/Footer";
import NetflixNav from "./components/NetflixNav";
import TVShows from "./components/TVShows";

function App() {
  return (
    <>
      <NetflixNav />
      <TVShows />
      <HomeFilm />
      <Footer />
    </>
  );
}

export default App;
