import React from 'react';

import Card from './Card';
import Carddata from './Carddata';


// import Calculator from './Calculator';
// import Greeting from './Greeting';
// import Heading from './Heading';
// import Para from './Para';
// import List from './List';



// function myfunc(val)
// {
//     return(

//         <Card imgsrc={val.img}
//         catagory={val.catagory}
//         title={val.title} 
//         link={val.link}
//         />

//     );
// }

function App()
{
    return(
        <React.Fragment>
             <h1 className="heading_style"> Top 3 Netflix series </h1>
             

            {
                Carddata.map( (val) => {
                    return(

                        <Card imgsrc={val.img}
                        catagory={val.catagory}
                        title={val.title} 
                        link={val.link}
                        />
                    );
                })
            }

                

             {/* <Calculator></Calculator>   
             <Greeting></Greeting>
             <Heading></Heading>
             <Para></Para>
             <List></List> */}

        </React.Fragment>
    );
}

export default App;