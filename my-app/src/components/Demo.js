import React from "react";
import MadeGoal from "./madeGoal";
import MissedGoal from "./MissedGoal";

const Demo = (props) => {
   
   const bool=false;

   if(bool) {
       return <MadeGoal/>
   }
   return <MissedGoal/>


    // const handleClick = (x,y) => {
    //     alert(x+y)
    // }
    // return (
    // <div>
    //     <h2>New Component</h2>
    //     {a === 10 && <h4>{props.para}</h4>}

    //     <button onClick={()=>handleClick(10,15)}>Button</button>
    // </div>
    
};

export default Demo;
