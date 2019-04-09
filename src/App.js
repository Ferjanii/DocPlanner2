import React, { Component } from 'react';
import './components/header.css';
import './components/footer.css'
import Header from './components/Header';
import Mainsection from './components/Mainsection';
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
        <div>
          <div>
            <Header/>
          </div>
          <div>
            <Mainsection/>
          </div>
          <div>
            <Footer/>
          </div>
        </div>
    );
  }
}

export default App;
