import "./App.css";
import { getMoviesList, findMovies } from "./Api.js";
import { useEffect, useState } from "react";
const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isSearch, setIsSearch] = useState(0);

  useEffect(() => {
    const getData = setTimeout(() => {
      if (!isSearch) {
        getMoviesList().then((res) => {
          setPopularMovies(res);
        });
      } else {
        findMovies(isSearch).then((res) => {
          setPopularMovies(res);
        });
      }
    }, 800);
    return () => clearTimeout(getData);
  }, [isSearch]);
  // const searchMovies = async (q) => {
  //   if (q) {
  //     const query = await findMovies(q);
  //     setPopularMovies(query.results);
  //   }
  // else {
  //   getMoviesList().then((res) => {
  //     setPopularMovies(res);
  //   });
  // }
  // };
  const moviePoster = `${process.env.REACT_APP_MOVIEPOSTER}`;
  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-content" key={i}>
          <div className="Movie-container">
            <img
              className="Movie-image"
              src={`${moviePoster}${movie.poster_path}`}
              alt=""
            />
            <div className="Movie-rating">⭐{movie.vote_average}</div>
          </div>
          <div className="Movie-title">{movie.title}</div>
          <div className="Movie-release">
            Release Date : {movie.release_date}
          </div>
        </div>
        //overview dan backdrop
      );
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">My Movies</div>
        <div className="Search-container">
          <input
            type="text"
            className="Searchbar"
            placeholder="Search . . ."
            onChange={({ target }) => {
              setIsSearch(target.value);
            }}
          />
        </div>
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
};

export default App;
