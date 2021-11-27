import React, { useEffect, useState }  from "react";
import './FeedbackCard.css'
import  Card  from "./Card.js";
function FeedbackCard(){
    const [data,setdata]=useState([]);
    useEffect(()=>{
        fetch("http://13.233.73.170:3000/feedback/61a0c2e1b9b63774cff47eed")
        .then(res=>res.json())
        .then((data)=>{
            console.log(data);
            setdata(data);
        })
        // console.log(data);
    },[])

    // console.log(data)
    return <>
    <div className="feedbackbox">
        <div className="row1">
            <h3 className="heading">Feedback</h3>
            <button className="submit_button">submit</button></div>
        <div className="row2">
            
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            

            
        </div>
    </div>
    </>
}
export default FeedbackCard;