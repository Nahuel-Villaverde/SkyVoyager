import React from "react";
import '../styles/Destinations.css'

const Destinations = () => {
  return (
    <section className='destination-section'>

        <img src="/Marte.png" alt="Background 3" className="bg-image-destination img1-destination" />
        <img src="/moon.png" alt="Background 4" className="bg-image-destination img2-destination" />
        <img src="/estacionespacial.png" alt="Background 4" className="bg-image-destination img3-destination" />
        <img src="/tierra.png" alt="Background 4" className="bg-image-destination img4-destination" />
     
      <div>
        <h2 className='destination-title' data-aos="fade-up" data-aos-duration="700">Destinations</h2>
        <div className='destination-subtitle subtitle1-destination'>
          <h2 className="planets-destination" data-aos="fade-up" data-aos-duration="700">Mars</h2>
        </div>
        <div className='destination-subtitle subtitle2-destination'>
          <h2 className="planets-destination" data-aos="fade-up" data-aos-duration="700">Moon</h2>
        </div>
        <div className='destination-subtitle subtitle3-destination'>
          <h2 className="space-station" data-aos="fade-up" data-aos-duration="700">International space station</h2>
        </div>
      </div>


    </section>
  );
};

export default Destinations;