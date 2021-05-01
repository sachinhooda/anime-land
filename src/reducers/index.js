import { combineReducers } from "redux";
import { SEARCH_ANIMES, SEARCH_TERM } from "../actions/types";

const searchAnimesReducer = (searchedAnimes = [], action) => {
  if (action.type === SEARCH_ANIMES) {
    return action.payload;
  }
  return searchedAnimes;
};
const searchTermReducer = (searchTerm = null, action) => {
  if (action.type === SEARCH_TERM) {
    return action.payload;
  }
  return searchTerm;
};

export default combineReducers({
  searchedAnimes: searchAnimesReducer,
  searchTerm: searchTermReducer,
});
