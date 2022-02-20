import React from "react";
import { Button } from "@material-ui/core";

class  ProtectedButton extends React.Component {

    render() {

    const weeksDayNames = [ "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

    const weeks = weeksDayNames.map(function(name) {
         return(
             <div key={name}  className="weeksDayNames-btn">
                <Button  className="btn" variant="outlined">{name}</Button>
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