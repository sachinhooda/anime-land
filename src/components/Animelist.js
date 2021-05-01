import Animecard from "./Animecard";
import { connect } from "react-redux";

const Animelist = (props) => {
  const animes = props.animes.map((anime) => {
    return (
      <div key={anime.mal_id} className="column">
        <Animecard
          details={anime}
          showLikeIcon={true}
          showFavIcon={true}
        ></Animecard>
      </div>
    );
  });
  const loader = (
    <div className="ui segment">
      <div className="ui active dimmer">
        <div className="ui massive text loader">Loading</div>
      </div>
    </div>
  );
  return (
    <div className="ui five stackable cards">
      {animes.length ? animes : loader}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    animes: state.searchedAnimes,
  };
};
export default connect(mapStateToProps)(Animelist);
