import React from "react";
import "./card.css";


const Card = (props)=> {
    const {name, email, id} = props;
    return (
        <div className="  bg-light-green br3 w-20 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}`} alt="Robots"/>
            <div>
                <h2>{name} </h2>
                <br/>
                <p> {email} </p>
            </div>
        </div>
    );
}
export default Card;