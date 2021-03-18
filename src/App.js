import React from 'react';
import './App.css';
import Header  from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DriedFruits from './components/DriedFruits';
import AllCategories from './components/AllCategories';
import ProductDetails from './components/ProductDetails';
import JustFruits from './components/JustFruits';
import Nuts from './components/Nuts';
import FreshFruits from './components/FreshFruits';
import ExoticFruits from './components/ExoticFruits';


function App() {

  return (
    <Router>
      <div className="app">
       <Switch>         
         <Route path="/all-categories">
         {/* <Header /> */}
         <AllCategories />
         </Route>
         
         <Route path='/dried-fruits'>
          {/* <Header /> */}
          <DriedFruits />
         </Route>

         <Route path='/just-fruits'>
          {/* <Header /> */}
          <JustFruits />
         </Route>

         <Route path='/fresh-fruits'>
            <FreshFruits /> 
         </Route>

         <Route path='/exotic-fruits'>
            <ExoticFruits  /> 
         </Route>

         <Route path='/nuts'>
            <Nuts /> 
         </Route>

         <Route path='/product-details'>
            <ProductDetails /> 
         </Route>

         <Route path='/'>
            <Header /> 
         </Route>

       </Switch>
    </div>
   </Router>
  )   
}

export default App;
