import React from 'react';

function Card(props)
{
    return(
        <React.Fragment>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="cardimage" className="card_img"/>
                    <div className="card_info">
                        <span className="card_catagory"> {props.catagory} </span>
                        <h3 className="card_title"> {props.title} </h3>
                        <a href={props.link} target="_blank" rel="noopener noreferrer">
                            <button>watch now</button>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}


export default Card;