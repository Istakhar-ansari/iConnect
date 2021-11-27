import React  from "react";
import './Card.css'
function Card(props){
    const {item}=props
    console.log("item aya",item._id);
    return <>
    <div className="cardbox">
    <h2>{`Class : ${item.classid}   Subject : ${item.subjectid}`}</h2>
    <h3>{`Feedback : ${item.feedbackText?item.feedbackText:''} `}</h3>
    {item.comments?<h3>{`Comments : ${item.comments}`}</h3>:null}
    <h3>{`Status : ${item.status}`}</h3>
    <h3>{`User Name : ${item.teacher.username} Sir`}</h3>
    </div>
    </>
}
export default Card;