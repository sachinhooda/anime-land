const Animecard = ({ details, showLikeIcon, showFavIcon }) => {
  console.log(details);
  return (
    <div className="ui blue card">
      <a
        className="image"
        href={details.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          style={{ width: "100", height: "200" }}
          src={details.image_url}
          alt=""
        />
      </a>
      <div className="content">
        <div className="header">{details.title}</div>
        <div className="description">
          <p>{details.synopsis}</p>
        </div>
      </div>
      <div className="extra">
        <div className="ui success progress" data-percent="100" id="example6">
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
