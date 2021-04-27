import { combineReducers } from "redux";
import {
  SEARCH_ANIMES,
  SEARCH_TERM,
  UPDATE_FILTER_STATE,
} from "../actions/types";

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

const updateFilterStateReducer = (isFilterActive = false, action) => {
  if (action.type === UPDATE_FILTER_STATE) {
    return !isFilterActive;
  }
  return isFilterActive;
};

export default combineReducers({
  searchedAnimes: searchAnimesReducer,
  searchTerm: searchTermReducer,
  isFilterActive: updateFilterStateReducer,
});
