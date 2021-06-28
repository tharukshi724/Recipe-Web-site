import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router , Route} from "react-router-dom";
import Addpantry from './components/Addpantry';
import View from './components/View';
import UpdatePantry from './components/UpdatePantry';

function App() {
  return (
    <Router>
    <div>
      <Route path = "/Addpantry" exact component = {Addpantry}></Route>
      <Route path = "/" exact component = {View}></Route>
      <Route path = "/updatePantry/:id" exact component = {UpdatePantry}></Route>
    </div>
    </Router>
  );
}

export default App;
