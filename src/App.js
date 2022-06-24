import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from "./pages/container/Container";
import Login from './pages/Login/Login';
class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <Routes>
              <Route exact path='/' element={<Login/>} />
              <Route path='/board' element={<Container/>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;