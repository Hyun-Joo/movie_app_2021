import React from 'react';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About'; //{About as Potato}
import Navigation from './components/Navigation';
import './App.css';
import Detail from './routes/Detail';

function App(){
  return (
    <>
      <BrowserRouter>
        {/* Link는 Router 안에 넣어야 함 */}
        <Navigation /> 
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie/:id" component={Detail} />
      </BrowserRouter>
      <footer></footer>
    </>
  )
}

export default App;