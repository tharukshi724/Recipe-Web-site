import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router , Route} from "react-router-dom";
import Addpantry from './components/Addpantry';

function App() {
  return (
    <Router>
    <div>
      <Route path = "/Addpantry" exact component = {Addpantry}></Route>
    </div>
    </Router>
  );
}

export default App;
