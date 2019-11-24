import React from 'react';
import './App.css';
import {Home,Blog,Header} from './containers';
import {Switch,Route} from 'react-router';
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/Home' component={Home}/>
        <Route exact path='/Blog' component={Blog}/>
        <Blog/>
        </Switch>
    </div>
  );
}

export default App;
