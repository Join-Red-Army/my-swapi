import React from 'react';
import spinner from './spinner_svg.svg';
import './spinner.css';

// const Spinner = () => {
//   return (
//     <div className="spinner loadingio-spinner-ripple-p56us8ujrl">
//       <div className="ldio-5tbgstban3a">
//         <div></div>
//         <div></div>
//       </div>
//     </div>
//   );
// };

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={spinner} alt='spinner image'/>
    </div>
  );
};

export default Spinner;