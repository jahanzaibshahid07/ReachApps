import React from 'react';

function Greeting()
{
    // style binding with attributes
    const date = new Date(2020,11,21, 1);
    const currentdate = date.getHours();

    let greetings = "";
    const cssstyle  = {};


    if(currentdate >= 1 && currentdate < 12)
    {
        greetings = "good morning";
        cssstyle.color = "green";
    }
    else if(currentdate >=13 && currentdate < 19)
    {
        greetings = "good afternoon";
        cssstyle.color = "orange";
    }
    else 
    {
        greetings = "good night";
        cssstyle.color = "yellow";
    }
    return(
        <h1>Hello Sir, 
            <span style={cssstyle}> {greetings} 
            </span> 
        </h1>

    );
}

export default Greeting;