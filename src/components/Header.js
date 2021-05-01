import { Link } from "react-router-dom";

const Header = (props) => {
  console.log(props);
  return (
      <div className="ui blue four item inverted menu">
        <Link className="item active" to="/">
          Home
        </Link>
        <Link className="item" to="/favourites">
          My Favourites
        </Link>
        <Link className="item" to="/likes">
          My Likes
        </Link>
        <Link className="item" to="/contact">
          Contact us
        </Link>
      </div>
  
  );
};

export default Header;
