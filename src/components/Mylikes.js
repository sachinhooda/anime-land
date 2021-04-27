import React from "react";

import Animecard from "./Animecard";

class Mylikes extends React.Component {
  render() {
    const likes = JSON.parse(localStorage.getItem("likes"));

    const animes = Object.entries(likes).map(([id, anime]) => {
      return (
        <div key={id} className="column">
          <Animecard
            details={anime}
            showLikeIcon={false}
            showFavIcon={true}
          ></Animecard>
        </div>
      );
    });

    return (
      <div className="ui segment">
        <div className={`ui five stackable cards`}>{animes}</div>
      </div>
    );
  }
}

export default Mylikes;
