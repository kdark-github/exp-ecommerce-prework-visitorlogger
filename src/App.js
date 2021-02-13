import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import VisitorPage from './pages/visitor/visitor';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/visitorpage" exact strict component={VisitorPage} />
      </Router>
    </div>
  );
}

export default App;
