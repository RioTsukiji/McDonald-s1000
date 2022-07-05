import React from "react";

const Result = (props) => {
    if(props.show){
        return(
            <p>{props.ans}</p>
        );
    }
};

export default Result;