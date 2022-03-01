import React from "react";
import { Button } from "@material-ui/core";
import { BrowserRouter, Link } from "react-router-dom";

class  ProtectedButton extends React.Component {

    render() {

    const weeksDayNames = [ "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

    const weeks = weeksDayNames.map(function(name) {
         return(
        
             <div key={name}  className="weeksDayNames-btn">
                 <BrowserRouter>
                 <Link to="page1">
                <Button  className="btn" variant="outlined">
                    {name}
                </Button>
                </Link>
                </BrowserRouter>
             </div>
         )
             
    });


    return(
        <div className="btn-app">
                {weeks}
        </div>
    )
    }
};

export default ProtectedButton