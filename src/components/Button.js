import React from "react";
import { Button } from "@material-ui/core";
import * as singleSpa from 'single-spa';
import ProgressBar from "./ProgressBar";


function ProtectedButton() {

    const todos = localStorage.getItem('todos');
    const savedDay = localStorage.getItem('currentDay');

   const handleClick = (name) => {
        localStorage.setItem('currentDay', name.nameD);
        // navigate('page1');
        // window.location = '/page1';
        singleSpa.navigateToUrl('/page1');
   }

   function handlePercentCompleteDay(day) {
    const tasks = JSON.parse(todos);
    const allCurrentDaysTodo = tasks.filter(todo => todo.day == day); 
    const allCompletedDay = allCurrentDaysTodo.filter((todo) => todo.complete).length;
    const percentage = (100/allCurrentDaysTodo.length)*allCompletedDay;
    console.log(percentage.toFixed(0));
    return percentage.toFixed(0);
    };


    const weeksDayNames = [
         { nameD:"Понедельник",  percentage : handlePercentCompleteDay("Понедельник") },
         { nameD:"Вторник",      percentage : handlePercentCompleteDay("Вторник") },
         { nameD:"Среда",        percentage : handlePercentCompleteDay("Среда") },
         { nameD:"Четверг",      percentage : handlePercentCompleteDay("Четверг") },
         { nameD:"Пятница",      percentage : handlePercentCompleteDay("Пятница") },
         { nameD:"Суббота",      percentage : handlePercentCompleteDay("Суббота") },
         { nameD:"Воскресенье",  percentage : handlePercentCompleteDay("Воскресенье") }
        ];

    const weeks = weeksDayNames.map(function(name) { 
       <ProgressBar/>
            
         return(
            <div key={name}  className="weeksDayNames">
                <div className="btn-painted">
                <Button className="btn"  onClick={() => handleClick(name)}>
                <ProgressBar  name={name} percentage={name.percentage} />  
                    <span>{name.nameD}</span>
                </Button>
                </div>
             </div>
         )     
    });

    return(
        <div className="btn-app">
            {weeks}
        </div>
    )

};

export default ProtectedButton