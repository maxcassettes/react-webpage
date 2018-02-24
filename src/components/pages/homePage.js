import React, { Component } from 'react';
import banner from './design-workstation.jpg';

class Homepage extends Component {
  render() {
    return (
        <div>
        <div className='banner'>
        <div className='mcoss'>
        <h1>Matthew M. Cossette </h1>
        <h2>Web Developer</h2>
        </div>
        <img className='bannerImg' src={banner} />
        </div>
        <div className='wrap'>
      
            <section>
        
            </section>
        </div>
</div>
        )
}
}

export default Homepage; 