const Animecard = ({ details, showLikeIcon, showFavIcon }) => {
  const progressType =
    details.score > 7.5 ? "success" : details.score > 4 ? "warning" : "error";

  const currentLikes = JSON.parse(localStorage.getItem("likes"));
  const alreadyLiked = details.mal_id in currentLikes;
  const alreadyLikeStyle = { opacity: 1, color: "#ff2733" };

  const currentFavourites = JSON.parse(localStorage.getItem("favourites"));
  const alreadyFavourite = details.mal_id in currentFavourites;
  const alreadyFavouriteStyle = { opacity: 1, color: "#ffb70a" };

  return (
    <div className="ui blue card">
      <a
        className="image"
        href={details.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          style={{ width: "100%", height: "300px" }}
          src={details.image_url}
          alt=""
        />
      </a>
      <div className="content" style={{ width: "100%", height: "166px" }}>
        <div className="header">{details.title}</div>
        <div className="description">
          <p>{details.synopsis}</p>
        </div>
      </div>
      <div className="extra">
        <div
          className={`ui ${progressType} progress`}
          data-percent="100"
          id="example6"
        >
          <div className="bar" style={{ width: `${details.score * 10}%` }}>
            <div className="progress">{Math.round(details.score * 10)}%</div>
          </div>
          <div className="label">Popularity</div>
        </div>
      </div>
      <div className="extra content">
        {showLikeIcon ? (
          <span className="left floated like">
            <i
              className="like icon"
              style={alreadyLiked ? alreadyLikeStyle : {}}
              onClick={() => {
                onClickLike(details);
              }}
            ></i>
            Like
          </span>
        ) : (
          ""
        )}
        {showFavIcon ? (
          <span className="right floated star">
            <i
              className="star icon"
              style={alreadyFavourite ? alreadyFavouriteStyle : {}}
              onClick={() => {
                onClickFavourite(details);
              }}
            ></i>
            Favorite
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const onClickLike = (details) => {
  const likes = JSON.parse(localStorage.getItem("likes"));
  likes[details.mal_id] = details;

  localStorage.setItem("likes", JSON.stringify(likes));
};

const onClickFavourite = (details) => {
  const favourites = JSON.parse(localStorage.getItem("favourites"));
  favourites[details.mal_id] = details;

  localStorage.setItem("favourites", JSON.stringify(favourites));
};

export default Animecard;
