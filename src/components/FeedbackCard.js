import React, { useEffect, useState }  from "react";
import './FeedbackCard.css'
import  Card  from "./Card.js";
function FeedbackCard(){
    const [datas,setdata]=useState([]);
    useEffect(()=>{
        fetch("http://13.233.73.170:3000/feedback/61a0c2e1b9b63774cff47eed")
        .then(res=>res.json())
        .then((items)=>{
            // console.log(data);
            setdata(items.data);
        })
        // console.log(data);
    },[])
    
    // console.log(datas)

    return <>
    <div className="feedbackbox">
        <div className="row1">
            <h3 className="heading">Feedback</h3>
            <button className="submit_button">submit</button></div>
        <div className="row2">
            

            {datas.map((item)=>{
                // console.log(item.feedbackText)
                return <Card key={item.teacher._id} item={item}/>
            })}
                        
        </div>
    </div>
    </>
}
export default FeedbackCard;