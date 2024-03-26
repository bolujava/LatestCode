
// PassengersInfoAdultPage.js
import React from 'react';
import PassengersInfoHeader from '../Components/PassengersInfoAdultPage/PassengersInfoHeader/PassengersInfoHeader';
import PassengersInfoMiddleTab from '../Components/PassengersInfoAdultPage/PassengersInfoMiddleTab/PassengersInfoMiddleTab';
import PassengersInfoLowerTab from '../Components/PassengersInfoAdultPage/PassengersInfoLowerTab/PassengersInfoLowerTab';


const PassengersInfoAdultPage = ({ searchDetails }) => {
  if (!searchDetails || searchDetails.noOfAdult <= 0) {
    return null; // Render nothing if searchDetails is missing or no adults specified
  }
  // Logic to generate multiple instances of PassengersInfoAdultPage based on the number of adults
  const adultPages = Array.from({ length: searchDetails.noOfAdult }).map((_, index) => (
    <div key={index}>
      <PassengersInfoHeader />
      <PassengersInfoMiddleTab searchDetails={searchDetails} />
      <PassengersInfoLowerTab />
    </div>
  ));

  return (
    <>
      {adultPages}
    </>
  );
}

export default PassengersInfoAdultPage;
