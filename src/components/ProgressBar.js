import React from "react";

const ProgressBar = (props) => {
 const { percentage, name} = props;

 const fillerStyles = {
   zIndex: '1000',
   width: `${percentage}%`,
   height: "50px",
   background: "#3bb78f",
   borderRadius: '4px',
    textAlign: "left",
    position: "absolute",
    left: "0"
 }


 return (
     <div style={fillerStyles}>
     </div>
 )
  

};

export default ProgressBar