import {Component} from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Service from './components/Service';
import Pricing from './components/Pricing';
import CallToAction from './components/CallToAction';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';


export default class  App extends Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <Service/>
        <Pricing/>
        <CallToAction/>
        <Testimonial/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
  
}

