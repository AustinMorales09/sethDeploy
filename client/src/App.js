import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Menu from './components/Menu';
import Photos from './components/Photos';
import Reservation from './components/Reservation';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
    <Navbar  />
    <div className="App">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/our-story" component={About} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/photos" component={Photos} />
      <Route exact path="/reservation" component={Reservation} />
    </Switch>
    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
