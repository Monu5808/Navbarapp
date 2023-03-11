import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navigation from './Navigation';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
