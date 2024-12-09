import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Technology.css'

const Technology = () => {

  return (
    <div className='technology-container' >
      <div className='advanced-materials' >
        <div className='advanced-materials-text' data-aos="fade-up" data-aos-duration="700">
          <h2>Advanced Materials</h2>
          <p>Our engineers have carefully selected the finest and most innovative materials to build our spacecraft. Every component has been designed to withstand the extreme demands of outer space, from the scorching temperatures of re-entry to the frigid temperatures of the vacuum of space.</p>
          <Link to="/materials" ><button className="button-more">More</button></Link>
        </div>
      </div>

      <div className='command-control' >
        <div className='command-control-text' data-aos="fade-up" data-aos-duration="700">
          <h2>Command Control</h2>
          <p>Command Control is the operational heart of every SkyVoyager mission, ensuring real-time oversight of each spacecraft and ensuring the safety and success of every spaceflight. This elite team is comprised of aerospace engineers, navigation experts, and communications technicians, all working together to monitor and direct every aspect of the mission.</p>
          <div className="button-container-more">
          <Link to="/materials" ><button className="button-more">More</button></Link>
          </div>
        </div>
      </div>
      <div className='propulsion' >
        <div className='propulsion-text' data-aos="fade-up" data-aos-duration="700">
          <h2>Propulsion Systems</h2>
          <p>Propulsion systems are the heart of our spacecraft, designed to carry passengers quickly, efficiently and safely to destinations beyond Earth. On SkyVoyager, we employ cutting-edge propulsion technologies that combine power, precision and sustainability.</p>
          <Link to="/materials" ><button className="button-more">More</button></Link>
        </div>
      </div>

      <div className='metrics' >
        <div className='metrics-title' data-aos="fade-up" data-aos-duration="700">
          <h2>Our Metrics: <br></br>
            Achievements that Define Excellence</h2>
          <p>The numbers don't lie. At SkyVoyager, we pride ourselves on offering a service that combines innovation, safety and satisfaction. Here we share some of our most notable milestones, which support our position as a leader in space tourism.</p>
        </div>
        <div className='metrics-info' data-aos="fade-up" data-aos-duration="700">
          <div className='total-launches'>
            <div className='total-launches-info'>
              <span>4</span>
              <span>7</span>
              <span>+</span>
            </div>
            <span className='text-metric'>Total Launches</span>
          </div>
          <div className='total-launches'>
            <div className='total-launches-info'>
              <span>5</span>
              <span>0</span>
              <span className='third-number'>0</span>
              <span>+</span>
            </div>
            <span className='text-metric'>Passengers on board</span>
          </div>
          <div className='total-launches'>
            <div className='total-launches-info'>
              <span>2</span>
              <span>0</span>
              <span>+</span>
            </div>
            <span className='text-metric-space'>Years of Innovation in Space</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Technology;  // Asegúrate de que esté exportado por defecto
