import React, { useState } from "react"

const Avinash =()=>{
    const [count,setCount]=useState(0);
    const addcount=()=>{
    //  setCount(prevCounter=>prevCounter+1)
    //  setCount(prevCounter=>prevCounter+1)
    //  setCount(prevCounter=>prevCounter+1)
    //  setCount(prevCounter=>prevCounter+1)
    setCount(count+5)

    }
    const removecount=()=>{
        if(count<=0){
            alert("You can not decrease it in negative")
        }else{

            setCount(count-1)
        }
    }
    return(
        <>
        <p onClick={addcount}>counter+</p>
        <span>{count}</span>
        <p onClick={removecount}>counter-</p>
        </>
    )
}

export default Avinash