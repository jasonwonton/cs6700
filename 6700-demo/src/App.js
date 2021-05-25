import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './contents/Home';
import BuildTopic1 from './contents/BuildTopic1'
import BuildTopic2 from './contents/BuildTopic2'
import BuildTopic3 from './contents/BuildTopic3'
import BuildTopic4 from './contents/BuildTopic4'
import BuildTopic5 from './contents/BuildTopic5'

function App() {
  return (
    <Router>
      <div className="App">
      <Route exact path="/">
      <Home />
      </Route>
      <Route path="/buildtopic1">
      <BuildTopic1/>
      </Route>
      <Route path="/buildtopic2">
      <BuildTopic2 />
      </Route>
      <Route path="/buildtopic3">
      <BuildTopic3 />
      </Route>
      <Route path="/buildtopic4">
      <BuildTopic4 />
      </Route>
      <Route path="/buildtopic5">
      <BuildTopic5 />
      </Route>
      </div>
    </Router>

  );
}

export default App;
