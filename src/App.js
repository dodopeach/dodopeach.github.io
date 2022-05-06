import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Career, Topics, Thoughts, TileDecorator, Donate } from "./components";

function App() {
  return (
    <Router>
      <div>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route path="/career">
                <Career />
              </Route>
              <Route path="/topics">
                <Topics />
              </Route>
              <Route path="/thoughts">
                <Thoughts />
              </Route>
              <Route path="/donate">
                <Donate />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </header>
        </div>
      </div>
    </Router>
  );
}

export default App;

function Home() {
  return (
    <>
      <h1>guzus</h1>

      <div className="paragraph">
        <strong>bio</strong>
        <ul>interested in decentralized/distributed/large-scale systems</ul>
        <ul>
          working at a tech company as a "substitutional military service"
        </ul>
      </div>

      <div className="paragraph">
        <strong>what i do</strong>
        <ul>
          <a href="https://blog.naver.com/guzus" className="App-link">
            blog
          </a>
        </ul>
        <ul>
          <a href="https://twitter.com/sweetburgercom" className="App-link">
            bitcoin tweet-bot
          </a>
        </ul>
        <ul>
          <a href="https://wordsisters.com" className="App-link">
            wordsisters.com
          </a>
          : website for searching synonyms (it has an android app)
        </ul>
        <ul>
          <Link to="/career" className="App-link">
            career
          </Link>
        </ul>
        <ul>
          <Link to="/thoughts" className="App-link">
            thoughts
          </Link>
        </ul>
      </div>

      <div className="paragraph">
        <strong>contact</strong>
        <ul>
          <a href="/" className="App-link">
            awesomepulsar@gmail.com
          </a>
        </ul>
        <ul>
          <Link to="/donate" className="App-link">
            donate
          </Link>
        </ul>
      </div>

      {/* <div className="Decorator">
        <TileDecorator></TileDecorator>
      </div> */}
    </>
  );
}
