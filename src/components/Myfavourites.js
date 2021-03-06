import React from "react";

import Animecard from "./Animecard";

class Myfavourites extends React.Component {
  render() {
    const favourites = JSON.parse(localStorage.getItem("favourites"));

    const animes = Object.entries(favourites).map(([id, anime]) => {
      return (
        <div key={id} className="column">
          <Animecard
            details={anime}
            showLikeIcon={false}
            showFavIcon={false}
          ></Animecard>
        </div>
      );
    });

    return (
      <div className="ui segment">
        <div className="ui five stackable cards">{animes}</div>
      </div>
    );
  }
}

export default Myfavourites;
