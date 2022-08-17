import React from "react";

const Letter = (props) =>{
    return (

        <>
         <button onClick={props.handlechange}>Letter</button>
        <h1>{props.letter}</h1>
        </>
    )
}

export default Letter