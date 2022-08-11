import React from "react";
import dateFormat from "dateformat";
import Loading from "./Loading";


const LoadComments = props => {
    if (props.commentIsloading){
        return <Loading/>;
    } else {
        return(
            props.comments.map(comment=>{
                return(
                    <div key = {comment.id}>
                        <h5>{comment.author}</h5>
                        <p>{comment.comment}</p>
                        <p> {comment.rating}</p>
                        <p> {dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>

                    </div>
                );
            })
        );
    }
}

export default LoadComments;