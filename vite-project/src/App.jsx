import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/Intro';
import Services from './components/Services';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';
import PortfolioItem from './components/PortfolioItem';

function App() {
  return (
    <>
        <h2>test</h2>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route path="/work/:id" component={PortfolioItem} />
      </Switch>
      <Footer />
    </Router>
    
    </>

  );
}

export default App;