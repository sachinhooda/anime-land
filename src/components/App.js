import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Contact from "./Contact";
import Myfavourites from "./Myfavourites";
import Mylikes from "./Mylikes";

const App = () => {
  return (
    <div className="ui center aligned fluid container">
      {/* <h2 className="animate__animated animate__tada">Anime Land</h2> */}
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/favourites" component={Myfavourites} />
          <Route exact path="/likes" component={Mylikes} />
          <Route exact path="/" component={Homepage}></Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
};

export default App;
