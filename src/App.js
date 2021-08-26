import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="app">
      <h1>Hello world!</h1>
    <Switch>
      <Route path="/"></Route>
      <Route path="/"></Route>
      <Route path="/"></Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
