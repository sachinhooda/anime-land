import React from "react";
import { connect } from "react-redux";
import { searchAnimes, searchTerm } from "../actions";
import { QUERY_CONFIG } from "../constants";

const Searchbar = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <div className="eight wide column">
        <div className="ui form">
          <div
            className="ui icon fluid input"
            data-tooltip="Search anything related to anime here"
          >
            <input
              onChange={updateSearchTerm(props)}
              onKeyPress={performSearchForEnterKey(props)}
              type="text"
              placeholder="Search any anime here, word must contain at least 3 characters"
            />
            <i
              onClick={performSearch(props)}
              className="inverted circular search link icon"
            ></i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const performSearch = (props) => {
  return () => {
    if (props.searchTermValue && props.searchTermValue.length > 2) {
      props.searchAnimes(props.searchTermValue, QUERY_CONFIG);
    }
  };
};
const performSearchForEnterKey = (props) => {
  return (e) => {
    console.log(e);
    if (e.charCode === 13) {
      console.log("enter key pressed");
      if (props.searchTermValue && props.searchTermValue.length > 2) {
        props.searchAnimes(props.searchTermValue, QUERY_CONFIG);
      }
    }
  };
};

const updateSearchTerm = (props) => {
  return (e) => {
    props.searchTerm(e.target.value);
  };
};

const mapStateToProps = (state) => {
  return {
    searchTermValue: state.searchTerm,
  };
};

export default connect(mapStateToProps, {
  searchAnimes,
  searchTerm,
})(Searchbar);
