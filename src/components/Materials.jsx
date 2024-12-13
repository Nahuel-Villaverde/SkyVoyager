import React from 'react';
import '../styles/Materials.css';

const Materials = () => {
    return (
        <section className="materials-section">
            <div className='background-images'>
                <img src="/capsula.png" alt="Capsula espacial" className="capsula" />
                <img src="/paneta4.png" alt="Imagen de planeta de fondo" className="bg-image img7" />
            </div>
            <div className='materials-home'>
                <div className='materials-title-container'>
                    <h2 className="materials-title" data-aos="fade-up" data-aos-duration="700">Our Technology</h2>
                    <span className="materials-subtitle" data-aos="fade-up" data-aos-duration="1000">La base de nuestros logros espaciales.</span>
                </div>
            </div>

            <div className='materials2'>
                <div className='materials-text-2' data-aos="fade-up" data-aos-duration="700">
                    <h3>Command Control</h3>
                    <p>The Orbital Command Center is the central hub where all operations of our space missions are monitored and managed. Designed to ensure precise and real-time supervision, this center combines advanced communication technologies, data analysis, and simulation to support space exploration safely and efficiently.</p>
                </div>
            </div>



            <div className='materials'>
                <div className='materials-text' data-aos="fade-up" data-aos-duration="700">
                    <h3 className='material-motor'>Stellar Drive Engine</h3>
                    <p>The "Stellar Drive Engine" is a hybrid engine designed for space travel within the near solar system, specifically focused on missions to the Moon, Mars, and the International Space Station (ISS). This engine combines chemical and electric propulsion technologies, providing the versatility and thrust needed to perform fast and precise trajectories between these destinations, as well as the ability to perform low-gravity maneuvers when approaching celestial bodies.</p>
                    <div>
                        <div className='materials-description-motor'>
                            <h4>Energy generated:</h4>
                            <span>20 MW</span>
                        </div>
                        <div className='materials-description-motor'>
                            <h4>Maximum speed:</h4>
                            <span>45,000 km/h</span>
                        </div>
                    </div>
                </div>
                <img src="/cnne-949243-cohete-de-propulsion-nuclear-podria-viajar-a-marte-Photoroom 1.png" alt="Motor propulsor de nave espacial" className='aluminio' />
            </div>
            

            <div className='materials1'>
                <div className='materials-text' data-aos="fade-up" data-aos-duration="700">
                    <h3>Carbon Fiber Composites</h3>
                    <p>Carbon fiber is an extremely lightweight, strong, and durable composite material made from thin strands of carbon woven together. It is widely used in our spacecraft due to its high strength-to-weight ratio, making it an ideal material for applications that require high structural strength without adding excessive weight.</p>
                    <div>
                        <div className='materials-description'>
                            <h4>Uses</h4>
                            <span>Rocket bodies, structural parts in launchers and satellites.</span>
                        </div>
                        <div className='materials-description'>
                            <h4>Properties</h4>
                            <span>High mechanical and thermal resistance. Reduced weight, excellent tolerance to vibrations and stresses.</span>
                        </div>
                    </div>
                </div>
            </div>


            
            <div className='materials3'>
                <div className='materials-text-3' data-aos="fade-up" data-aos-duration="700">
                    <h3>Aluminum-Lithium</h3>
                    <p>An innovative material that combines the lightness of aluminum with the added strength of lithium, offering an advanced solution for the demanding needs of the aerospace industry. This alloy is specifically designed to maximize structural efficiency, significantly reducing the overall weight of spacecraft and vehicles without compromising strength or durability. Its exceptional performance under extreme pressure and temperature conditions makes it an ideal choice for critical components such as fuel tanks and load-bearing structures, enhancing performance and safety in space missions.</p>
                    
                </div>
            </div>

            <div className='materials4'>

            </div>

        </section>
    );
};

export default Materials;
