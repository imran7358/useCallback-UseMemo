import React from "react";
const Color = (props)=>{
    return (
        <>
        <button onClick={props.handlechange}>color</button>
        <h1>{props.color}</h1>
        </>
    )
}


export default Color