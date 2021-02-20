import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import New from './Pages/New/New';
import Edit from './Pages/Edit/Edit';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new" component={New} />
        <Route path="/edit/:id" component={Edit} />
      </Switch>
    </div>
  );
}

export default App;
