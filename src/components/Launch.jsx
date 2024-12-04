import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Launch.css'

const Launch = () => {
  return (
    <section className='launch-section'>
      <div className='background-images'>
        <img src="/planeta1.png" alt="Background 1" className="bg-image img1" />
        <img src="/planeta2.png" alt="Background 2" className="bg-image img2" />
        <img src="/planeta3.png" alt="Background 3" className="bg-image img3" />
        <img src="/cohete-launch.png" alt="Background 4" className="bg-image img4" />
        <img src="/astronauta.png" alt="Background 5" className="bg-image img5" />
        <img src="/paneta4.png" alt="Background 6" className="bg-image img6" />
      </div>
      <div>
        <h1 className='launch-title' data-aos="fade-up" data-aos-duration="700">Your Journey Begins: <br></br>The Launch Process</h1>
        <div className='launch-subtitle subtitle1' data-aos="fade-up" data-aos-duration="700">
          <h2>Pre-Launch Training</h2>
          <p>Before your launch, you will receive exclusive preparation with our team of experts, who will guide you through zero-gravity simulations and safety training.</p>
        </div>
        <div className='launch-subtitle subtitle2' data-aos="fade-up" data-aos-duration="700">
          <h2>Pre-Launch Training</h2>
          <p>Before your launch, you will receive exclusive preparation with our team of experts, who will guide you through zero-gravity simulations and safety training.</p>
        </div>
        <div className='launch-subtitle subtitle3' data-aos="fade-up" data-aos-duration="700" >
          <h2>Pre-Launch Training</h2>
          <p>Before your launch, you will receive exclusive preparation with our team of experts, who will guide you through zero-gravity simulations and safety training.</p>
        </div>
        <div className='launch-subtitle subtitle4' data-aos="fade-up" data-aos-duration="700">
          <h2>Pre-Launch Training</h2>
          <p>Before your launch, you will receive exclusive preparation with our team of experts, who will guide you through zero-gravity simulations and safety training.</p>
        </div>

      </div>
      <Link to="/reserve" ><button className="button-launch" data-aos="fade-up" data-aos-duration="600">Reserve Your Seat</button></Link>


    </section>
  );
};

export default Launch;
