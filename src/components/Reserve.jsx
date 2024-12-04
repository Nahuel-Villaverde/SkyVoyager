import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/Reserve.css';

const destinations = [
  { name: 'Mars', image: '/Marte.png', className: 'mars' },
  { name: 'Moon', image: '/moon.png', className: 'moon' },
  { name: 'International Space Station', image: '/estacionespacial.png', className: 'iss' },
];

const Reserve = () => {
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [selectedDestination, setSelectedDestination] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!departureDate || !returnDate) {
      setErrorMessage('Please select both departure and return dates.');
      return;
    }

    if (returnDate <= departureDate) {
      setErrorMessage('Return date must be after the departure date.');
      return;
    }

    setSuccessMessage(`Reservation submitted successfully! Destination: ${destinations[selectedDestination].name}`);
  };

  const handleNextDestination = () => {
    setSelectedDestination((prev) => (prev + 1) % destinations.length);
  };

  const handlePreviousDestination = () => {
    setSelectedDestination((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  return (
    <div className="reserve-container">
      <h1>Reserve Your Journey</h1>

      {/* Carrusel de destinos */}
      <div className="carousel">
        <button className="carousel-button prev" onClick={handlePreviousDestination}>
          &#8249;
        </button>
        <div className="carousel-item">
          <img
            src={destinations[selectedDestination].image}
            alt={destinations[selectedDestination].name}
            className={`destination-image ${destinations[selectedDestination].className}`}
          />
          <p className="destination-name">{destinations[selectedDestination].name}</p>
        </div>
        <button className="carousel-button next" onClick={handleNextDestination}>
          &#8250;
        </button>
      </div>

      {/* Fecha de ida y vuelta */}
      <form onSubmit={handleFormSubmit}>
        <div className="date-picker-container">
          <div className="date-picker">
            <label>Departure Date</label>
            <DatePicker
              selected={departureDate}
              onChange={(date) => setDepartureDate(date)}
              placeholderText="Select departure date"
              dateFormat="dd/MM/yyyy"
              className="date-input"
            />
          </div>
          <div className="date-picker">
            <label>Return Date</label>
            <DatePicker
              selected={returnDate}
              onChange={(date) => setReturnDate(date)}
              placeholderText="Select return date"
              dateFormat="dd/MM/yyyy"
              className="date-input"
            />
          </div>
        </div>

        {/* Selector de personas */}
        <div className="people-selector">
          <label>Number of People</label>
          <select
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(Number(e.target.value))}
            className="people-dropdown"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        {/* Botón de envío */}
        <button type="submit" className="submit-button">
          Submit Reservation
        </button>
      </form>

      {/* Mensajes */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default Reserve;
