import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import LivingRoomPage from './pages/LivingRoomPage';
import KitchenPage from './pages/KitchenPage';
import WardrobePage from './pages/WardrobePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/living-room" component={LivingRoomPage} />
          <Route path="/kitchen" component={KitchenPage} />
          <Route path="/wardrobe" component={WardrobePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
