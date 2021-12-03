import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

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
        <li>
          interested in distributed systems, large-scale data engineering and finance
        </li>
        <li>
          working in a company as a (substitutional military service);
        </li>
      </p>

      <div>
        <a href="https://blog.naver.com/guzus" className="App-link">
          personal blog
        </a>
      </div>
      <div>
        <a href="https://twitter.com/sweetburgercom" className="App-link">
          bitcoin twitter-bot : going pretty well
        </a>
      </div>
      <div>
        <a href="https://wordsisters.com" className="App-link">
          wordsisters.com : website for searching synonyms, it even has an
          android app!
        </a>
      </div>
      <div>
        <Link to="/career" className="App-link">career</Link>
      </div>
      <div>
        <Link to="/thoughts" className="App-link">thoughts</Link>
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

function Thoughts() {
  return (
    <>
      <Link to="/">Back</Link>
      <h2>guzus | Thoughts</h2>
    </>
  );
}

function Career() {
  return (
    <>
      <Link to="/">Back</Link>
      <h2>guzus | Career</h2>
      <ul>
        <li>NAVER corporation, backend engineering, July 2021 ~ August 2021</li>
        <li>Juneung IT, backend engineering, October 2021 ~ </li>
      </ul>
    </>
  );
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

function TileDecorator() {
  function BlankSquare() {
    return <div class="blank_square"></div>;
  }
  function ColoredSquare() {
    return <div class="colored_square"></div>;
  }
  function toBox(c) {
    if(c === 0) return <BlankSquare></BlankSquare>;
    else return <ColoredSquare></ColoredSquare>;
  }
  const tiles = [
    [0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
  ];
  return (
    <>
      <div>
      <table>
        <tbody>
          {tiles.map((item) => {
            return (
              <tr>
                {item.map((box) => {
                  return (<td>{toBox(box)}</td>);
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </>
  );
}