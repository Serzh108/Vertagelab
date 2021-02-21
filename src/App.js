import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Pages/Home/Home';
import New from './Pages/New/New';
import Edit from './Pages/Edit/Edit';
import Header from './components/Header/Header';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new" component={New} />
        <Route path="/edit/:id" component={Edit} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
