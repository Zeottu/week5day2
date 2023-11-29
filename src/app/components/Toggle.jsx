import React, {useState} from "react"

function Toggle (){
    const [isBlue, setIsBlue] = useState(false);
function handleClick(){
    setIsBlue(!isBlue);
} 


    return(
<div >
<h1>Toggle the Box</h1>
<div id= "box"
onClick={handleClick}
className={isBlue? "blue": "white"}>
</div>
</div>

)} 

export default Toggle;