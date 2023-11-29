"use client";
import {useState}  from "react";

export default function Mirror (){
    const [mirror, setMirror] =useState ("")
    return(
    <div>
    <h1>Mirror</h1>
    <input type="text"
    onChange={(e)=>{
        setMirror(e.target.value);
}}
/>
<p>{mirror}</p>
</div>
)
};