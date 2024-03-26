// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PassengersInfoAdultPage from './Pages/PassengersInfoAdultPage';
import PassengersInfoInfantPage from './Pages/PassengersInfoInfantPage';
import BookingConfirmationPage from './Pages/BookingConfirmationPage';
import LandingPage from './Pages/LandingPage';
import FlightSelectionOnePage from './Pages/FlightSelectionOnePage';
import './App.css';
import PaymentInfoPage from './Pages/PaymentInfoPage';

function App() {
  const [searchDetails, setSearchDetails] = useState(null);

  const handleSearchDetails = (details) => {
    setSearchDetails(details);
  };
  return (
    <Router>
      <Routes>
        <Route exact path="/searchflight" element={<LandingPage onSearch={handleSearchDetails} />} />
        {/* <Route exact path="/searchflight" element={<Search onSearch={handleSearchDetails} />} /> */}
        <Route exact path="/booking-confirmation" element={<BookingConfirmationPage />} />
        <Route exact path="/flight-select" element={<FlightSelectionOnePage />} />
        <Route
          exact
          path="/adult-info-page"
          element={
            searchDetails && searchDetails.noOfAdult > 1 ? (
              <PassengersInfoAdultPage searchDetails={searchDetails} />
            ) : (
              null
            )
          }
        />
        <Route
          exact
          path="/infant-info-page"
          element={
            searchDetails && searchDetails.noOfInfant > 1 ? (
              <PassengersInfoInfantPage searchDetails={searchDetails} />
            ) : (
              null
            )
          }
        />
        <Route exact path="/make-payment" element={<PaymentInfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
