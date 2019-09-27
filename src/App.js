import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage.component';
import './App.css';
const HatsPage = () =>(
  <div>
   <h1>HATS</h1>
  </div>
)
function App() {
  return (
    <div className="App">
      {/* sem o exact, ele renderiza se o path bater 
      e o switch renderiza apenas uma rota e o seu component
      que derem match
      */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
