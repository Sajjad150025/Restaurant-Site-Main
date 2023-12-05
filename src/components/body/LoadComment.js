import dateFormat from "dateformat";
import React from 'react';
import Loading from "./Loading";


const LoadComment = props => {
    if(props.commentIsLoading){
        return <Loading />
    }else{
        return(
            props.comments.map(comment=>{
                return (
                    <div key={comment.id}>
                        <h5>{comment.author}</h5>
                        <p>{comment.comments}</p>
                        <p>Rating: {comment.rating}</p>
                        <p>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p> 
                    </div>
                )
            })
        )  
    }
     
}

export default LoadComment;