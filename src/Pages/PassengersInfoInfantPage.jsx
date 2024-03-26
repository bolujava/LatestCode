// import React, { useState } from 'react';
// import PassengersInfoHeader from '../Components/PassengersInfoAdultPage/PassengersInfoHeader/PassengersInfoHeader';
// import PassengersInfoMiddleTab from '../Components/PassengersInfoAdultPage/PassengersInfoMiddleTab/PassengersInfoMiddleTab';
// import PassengersInfoInfantLowerTab from '../Components/PassengersInfoInfantPage/PassengersInfoInfantLowerTab/PassengersInfoInfantLowerTab';
// import ModalPageTrip from '../Components/ModalPage/ModalPageTrip';

// const PassengersInfoInfantPage = () => {
//   const searchDetails = {};

//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <>
//       <div>
//         <PassengersInfoHeader />
//         <PassengersInfoMiddleTab searchDetails={searchDetails} />
//         <PassengersInfoInfantLowerTab openModal={openModal} />
//         {isOpen && <ModalPageTrip isOpen={isOpen} onClose={closeModal} searchDetails={searchDetails} />}
//       </div>
//     </>
//   );
// };

// export default PassengersInfoInfantPage;

// PassengersInfoInfantPage.js
import React from 'react';
import PassengersInfoHeader from '../Components/PassengersInfoAdultPage/PassengersInfoHeader/PassengersInfoHeader';
import PassengersInfoMiddleTab from '../Components/PassengersInfoAdultPage/PassengersInfoMiddleTab/PassengersInfoMiddleTab';
import PassengersInfoInfantLowerTab from '../Components/PassengersInfoInfantPage/PassengersInfoInfantLowerTab/PassengersInfoInfantLowerTab';
import ModalPageTrip from '../Components/ModalPage/ModalPageTrip';

const PassengersInfoInfantPage = ({ searchDetails }) => {
  // Logic to generate multiple instances of PassengersInfoInfantPage based on the number of infants
  const infantPages = Array.from({ length: searchDetails.noOfInfant }).map((_, index) => (
    <div key={index}>
      <PassengersInfoHeader />
      <PassengersInfoMiddleTab searchDetails={searchDetails} />
      <PassengersInfoInfantLowerTab />
      {/* Include modal if needed */}
      {/* <ModalPageTrip searchDetails={searchDetails} /> */}
    </div>
  ));

  return (
    <>
      {infantPages}
    </>
  );
}

export default PassengersInfoInfantPage;

