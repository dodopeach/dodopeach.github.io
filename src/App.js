import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Career, Topics, Thoughts, Donate } from "./components";
import { AiOutlineLink } from "react-icons/ai";

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
        <ul>interested in system / computer system</ul>
        <ul>working at a tech company</ul>
        <ul>currently a soldier</ul>
      </div>

      <div className="paragraph">
        <strong>what i do</strong>
        <ul>
          <a href="https://blog.naver.com/guzus" className="App-link">
            blog <AiOutlineLink></AiOutlineLink>
          </a>
        </ul>
        <ul>
          <a href="https://twitter.com/sweetburgercom" className="App-link">
            bitcoin tweet-bot <AiOutlineLink></AiOutlineLink>
          </a>
        </ul>
        <ul>
          <a href="https://wordsisters.com" className="App-link">
            wordsisters.com <AiOutlineLink></AiOutlineLink>
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
            awesomepulsar@gmail.com <AiOutlineLink></AiOutlineLink>
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
