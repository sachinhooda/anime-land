import React from "react";
import { connect } from "react-redux";

import Animelist from "./Animelist";
import Searchbar from "./Searchbar";
import { searchAnimes } from "../actions";

class Homepage extends React.Component {
  componentDidMount() {
    if (null === localStorage.getItem("likes")) {
      localStorage.setItem("likes", JSON.stringify({}));
    }
    if (null === localStorage.getItem("favourites")) {
      localStorage.setItem("favourites", JSON.stringify({}));
    }
    this.props.searchAnimes();
  }

  render() {
    return (
      <div className="ui grid center aligned">
        <div className="two column row">
          <Searchbar></Searchbar>
        </div>
        <div className="one column row">
          <Animelist></Animelist>
        </div>
      </div>
    );
  }
}

export default connect(null, { searchAnimes })(Homepage);
