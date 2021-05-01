import jikanAnimes from "../apis/jikanAnimes";
import { SEARCH_ANIMES, SEARCH_TERM } from "./types";

export const searchAnimes = (searchTerm, queryConfig = {}) => async (
  dispatch
) => {
  Object.entries(queryConfig).forEach(([key, value]) => {
    console.log(key, value);
  });

  const defaultQueryString = "page=1&type=tv&limit=5";
  const queryString =
    searchTerm === undefined
      ? `q=&order_by=score&sort=desc${defaultQueryString}`
      : `q=${searchTerm}&${defaultQueryString}`;
  const response = await jikanAnimes.get(`search/anime?${queryString}`);

  dispatch({
    type: SEARCH_ANIMES,
    payload: response.data.results,
  });
};

export const searchTerm = (searchTerm) => {
  return {
    type: SEARCH_TERM,
    payload: searchTerm,
  };
};
