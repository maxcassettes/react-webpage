import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router, 
    Route, 
    Link
} from 'react-router-dom';

//components
import Header from './components/headerComponents/header';
import Footer from './components/footerComponents/footer';
import Homepage from './components/pages/homePage';
import About from './components/pages/about';
import Portfolio from './components/pages/portfolio';
import Contact from './components/pages/contact';
//styles
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
<Header/>    

<Route exact path='/' component={Homepage}/>
<Route exact path='/about' component={About}/>
<Route exact path='/portfolio' component={Portfolio}/>
<Route exact path='/contact' component={Contact}/>
 
<Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
