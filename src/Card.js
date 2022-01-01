import React from 'react';


const Card = ({id, name, imageURL}) => {



    return (
        <img id={id} alt={name} src={imageURL}></img>
    )
}

export default Card;