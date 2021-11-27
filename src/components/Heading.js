import React , {useState}  from "react";
import './Heading.css'
import back from '../background.png'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

function Heading(){
    const [user] = useState(JSON.parse(localStorage.getItem('teacherAuth')))

    // return <div className="container">
    //     <div className="col1">
    // <button class="button-36" role="button">View</button>
    // <button class="button-37" role="button">Upload</button>
    // <button class="button-38" role="button">Feedback</button>
    // </div>
    // <div className="col2"></div>
    // </div>

    const renderFeedback = () =>{
        
    }

    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          {!user.admin && <Fab variant="extended" color="primary" onClick= {renderFeedback}>
            Submit Feedback
          </Fab>}
          {user.admin && <Fab variant="extended" color="primary" aria-label="add">
            Evaluate Feedback
          </Fab>}
          <Fab variant="extended" color="primary" aria-label="edit">
            View Content
          </Fab>
          <Fab variant="extended" color="primary">
            Upload Content 
          </Fab>
          {user.admin && <Fab variant="extended" color="primary">
            Moderate Content 
          </Fab>}
        </Box>
      );

}

export default Heading