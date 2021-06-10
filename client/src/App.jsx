import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from 'Pages/Main.jsx';
import Join from 'Pages/Join.jsx';
import Bingo from 'Pages/Bingo.jsx'
import React from 'react';
import Create from 'Pages/Create';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/join" exact component={Join} />
        <Route path="/create" exact component={Create} />
        <Route path="/bingo/:id" component={Bingo} />
      </Switch>
    </Router>
  );
}

export default App;
