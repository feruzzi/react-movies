import "./App.css";
import { getMoviesList, findMovies } from "./Api.js";
import { useEffect, useState } from "react";
import Category from "./components/Category.js";
const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isSearch, setIsSearch] = useState(0);
  const [category, setCategory] = useState("popular");
  useEffect(() => {
    const getData = setTimeout(() => {
      if (!isSearch) {
        getMoviesList(category).then((res) => {
          setPopularMovies(res);
        });
      } else {
        findMovies(isSearch).then((res) => {
          setPopularMovies(res);
        });
      }
    }, 800);
    return () => clearTimeout(getData);
  }, [isSearch, category]);
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
  const handleClickActive = (val) => {
    setCategory(val);
  };
  const moviePoster = `${process.env.REACT_APP_MOVIEPOSTER}`;
  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-content" key={i}>
          <div className="Movie-card-container">
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
        <Category handleClickActive={handleClickActive} />
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
};

export default App;
