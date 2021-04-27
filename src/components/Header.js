import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="ui segment">
      <div className="ui blue four item inverted menu">
        <Link className="item" to="/">
          Home
        </Link>
        <Link className="item active" to="/favourites">
          My Favourites
        </Link>
        <Link className="item" to="/likes">
          My Likes
        </Link>
        <Link className="item" to="/contact">
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default Header;
