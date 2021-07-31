import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router , Route} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Addpantry from './components/Addpantry';
import View from './components/View';
import UpdatePantry from './components/UpdatePantry';


import Navbar from './components/Navbar';


import Landingpage from './components/Landingpage';
import Cake from './components/Cake';
import Soup from './components/Soup';
import Rice from './components/Rice';
import Bakery from './components/Bakery';
import RecipeUpload from './components/RecipeUpload';
import MyRecipes from './components/MyRecipes';

function App() {
  return (
    <Router>
     
    <div>
     
    <Route path = "/landing" exact component = {Landingpage}></Route>
      <Route path = "/login" exact component = {Login}></Route>
      <Route path = "/register" exact component = {Register}></Route>
      <Route path = "/cake" exact component = {Cake}></Route>
      <Route path = "/soup" exact component = {Soup}></Route>
      <Route path = "/rice" exact component = {Rice}></Route>
      <Route path = "/bakery" exact component = {Bakery}></Route>
      <Route path = "/upload" exact component ={RecipeUpload}></Route>
      <Route path = "/viewRecipe" exact component ={MyRecipes}></Route>
   
   
      <Route path = "/Addpantry" exact component = {Addpantry}></Route>
      <Route path = "/view" exact component = {View}></Route>
      <Route path = "/updatePantry/:id" exact component = {UpdatePantry}></Route>
    </div>
    </Router>
  );
}

export default App;
