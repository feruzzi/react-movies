import axios from "axios";

const apiUrl = `${process.env.REACT_APP_BASEURL}`;
const apiKey = `${process.env.REACT_APP_APIKEY}`;
export const getMoviesList = async (q) => {
  console.log(q);
  const movies = await axios.get(apiUrl + "/movie/" + q + "?api_key=" + apiKey);
  //   console.log({ moviesList: movies });
  return movies.data.results;
};

export const findMovies = async (q) => {
  const find = await axios.get(
    apiUrl + "/search/movie?api_key=" + apiKey + "&query=" + q
  );
  return find.data.results;
};
