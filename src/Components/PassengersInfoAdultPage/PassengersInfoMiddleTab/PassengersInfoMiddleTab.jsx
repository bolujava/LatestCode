import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './PassengersInfoMiddleTab.css';
import PropTypes from 'prop-types';
import PassengerSearchad from '/src/assets/passengersearchbar.svg'

const PassengersInfoMiddleTab = ({ searchDetails }) => {
  PassengersInfoMiddleTab.propTypes = {
    searchDetails: PropTypes.object.isRequired, 
  };
  const [departurePort, setDeparturePort] = useState('Lagos(LOS)');
  const [arrivalPort, setArrivalPort] = useState('Abuja(ABJ)');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [tripType, setTripType] = useState('ONE_WAY');
  const [noOfAdult, setNoOfAdult] = useState(0); // Default to 1 adult
  const [noOfChildren, setNoOfChildren] = useState(0); // Default to 0 children
  const [noOfInfant, setNoOfInfant] = useState(0); // Default to 0 infants

  if (!searchDetails) {
    return <div>Loading...</div>;
  }


  const handleAdultChange = (e) => {
    setNoOfAdult(parseInt(e.target.value));
  };

  const handleChildrenChange = (e) => {
    setNoOfChildren(parseInt(e.target.value));
  };
  const handleDeparturePortChange = (e) => {
    setDeparturePort(e.target.value);
  };
  const handleArrivalPortChange = (e) => {
    setArrivalPort(e.target.value);
  };
  const handleDepartureDateChange = (e) => {
    setDepartureDate(e.target.value);
  };
  const handleReturnDateChange = (e) => {
    setReturnDate(e.target.value);
  };
  const handleTripTypeChange = (e) => {
    setTripType(e.target.value);
  };

  const handleInfantChange = (e) => {
    setNoOfInfant(parseInt(e.target.value));
  };

  return (
    <div>
      <div className="middletab-adultb">






<div className='search-containerb'>
<Link to="/booking-confirmation">
<button className="search-buttonb" type="submit">
              <img src={PassengerSearchad} alt='ButtonSearchad' />
            </button>
            </Link>
         
</div>



        <div className="flightdetails-adultb">
          <h3>{departurePort} - {arrivalPort}</h3>
          <h4>{departureDate} - {returnDate} | {noOfAdult} Adult, {noOfChildren} Child, {noOfInfant} Infant | {tripType}</h4>
        </div>

        
        <div className="total-price-container-adultb">
          <h1>Total Price</h1>
          <h4>NGN 200,000</h4>
        </div>
      </div>
    </div>
  );
};

export default PassengersInfoMiddleTab;
