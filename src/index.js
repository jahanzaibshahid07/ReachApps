import React from 'react';
import ReactDom from 'react-dom';

// JSX fragment is used to avoid extra <div> in memory
// {} is used JSX expression not for statement 

// const fname  = "jahanzaib shahid";
// ReactDom.render(
//       <React.Fragment>
//           <h1>my name is {fname} </h1>
//           <h2> sum is {2+3} </h2>
//           <h2> sum is {Math.random()} </h2>
//       </React.Fragment>
//      ,
//      document.getElementById('root')
// );

// {`${} ${}`} it is called template literals 

// contentEditable="true" JSX attribute 

const fname = "Jahanzaib";
const lname = "Shahid";
const date  = new Date();

ReactDom.render(
      <React.Fragment>
          <h2 contentEditable="true"> My Name Is {`${fname} ${lname}`}</h2>
          <h2> Current Date {date.toLocaleDateString()} </h2>
          <h2> Current Time {date.toLocaleTimeString()} </h2>
      </React.Fragment>
     ,
     document.getElementById('root')
);
