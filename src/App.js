import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Career, Topics, Thoughts, TileDecorator } from "./components";

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

      <p>
        currently :
        <li>interested in decentralized/distributed/large-scale systems</li>
        <li>
          working in a tech company as a "substitutional military service";
        </li>
      </p>

      <div>
        <a href="https://blog.naver.com/guzus" className="App-link">
          personal blog
        </a>
      </div>
      <div>
        <a href="https://twitter.com/sweetburgercom" className="App-link">
          bitcoin tweet-bot
        </a>
      </div>
      <div>
        <a href="https://wordsisters.com" className="App-link">
          wordsisters.com : website for searching synonyms (it has an android
          app)
        </a>
      </div>
      <div>
        <Link to="/career" className="App-link">
          career
        </Link>
      </div>
      <div>
        <Link to="/thoughts" className="App-link">
          thoughts
        </Link>
      </div>
      <div>
        <a href="/" className="App-link">
          awesomepulsar@gmail.com
        </a>
      </div>
      <div className="Decorator">
        <TileDecorator></TileDecorator>
      </div>
    </>
  );
}
