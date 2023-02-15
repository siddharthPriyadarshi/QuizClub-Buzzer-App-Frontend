import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import PlayerHome from "./layouts/PlayerHome";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={<PlayerHome />} exact />
      </Router>
    </div>
  );
}

export default App;
