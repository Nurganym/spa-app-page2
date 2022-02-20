import React from "react";
import { Typography } from "@material-ui/core";
import ProtectedButton from "./Button";


 class ToDo extends React.Component {

    render() {

         return(
             <div className="todo">
        <Typography variant="6">
            <h1>Запланировано</h1>
            <div>
                <ProtectedButton />
            </div>
        </Typography>
    </div>
)
}
}

export default ToDo;