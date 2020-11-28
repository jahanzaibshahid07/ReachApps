import React from 'react';
import Sum from './CalFunctions';
import {Sub, Mul, Div} from './CalFunctions';

function Calculator()
{
    return(
        <React.Fragment>
            <h1>Calculator Functions</h1>
            <ul>
                <li>Sum of a and b = {Sum(10,23)}</li>
                <li>Sub of a and b = {Sub(30,15)}</li>
                <li>Mul of a and b = {Mul(12,45)}</li>
                <li>Div of a and b = {Div(50,5)}</li>
            </ul>
        </React.Fragment>
    );
}

export default Calculator;