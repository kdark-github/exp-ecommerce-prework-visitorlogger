import logo from './logo.svg';
import { Route, Redirect, Link } from "react-router-dom";
import VisitorPage from './pages/visitor/visitor';
import { AppBar } from '@material-ui/core';
import './App.css';
import LatestNews from './pages/latestNews/latestNews';

function App() {
  return (
    <div style={{ paddingTop: '60px' }}>
      <div color="secondary" className="appbar-main">

        <ul>
          <li>
            <Link className="appbar-links" to="/">Latest News</Link>
          </li>
          <li>
            <Link className="appbar-links" to="/visitorpage">Visitor Page</Link>
          </li>
        </ul>
      </div>
      <Route path="/visitorpage" exact strict component={VisitorPage} />
      <Route path="/" exact strict component={LatestNews} />
    </div>
  );
}

export default App;
