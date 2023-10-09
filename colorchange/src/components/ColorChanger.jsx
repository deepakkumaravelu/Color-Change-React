import React, { useState } from 'react'
const ColorChanger = () => {
    const[backgroundColor,setBgColor]=useState("black");
  return (
    <div style={{backgroundColor}} >
    <button value={backgroundColor} onClick={()=>{
        if(backgroundColor==="black")
           setBgColor("red")
        else if(backgroundColor==="red"){
            setBgColor("blue")
        }else{
            setBgColor("black")
        }
}}>Click me</button>
    
    </div>
  )
}
export default ColorChanger