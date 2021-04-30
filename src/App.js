import logo from './logo.svg';
import React from 'react';
import {BrowserRouter , Switch, Route} from 'react-router-dom'
import './App.scss';

import FormHome from  './pages/Home/FormHome'
import Details from './pages/Details'
import SearchResult from './pages/allResults'
import Favoris from './pages/Favoris'
import RandomRecipe from './pages/RandomRecipe'


function App() {
  return (
  <BrowserRouter>

    <Switch>
      <Route exact path='/' component={FormHome}/>
      <Route exact path='/Details/:id' component={Details}/>
      <Route exact path='/result' component={SearchResult}/>
      <Route exact path= '/favoris' component={Favoris}/>
      <Route exact path='/random' component={RandomRecipe}/>

      <Route path="*" render={()=> <h1>404</h1>}/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
