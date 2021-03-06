import './Landing.css'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import React from 'react';


// Main function
const Landing = (props:any) => {
    return (
        <>             
        <header className="hero" style={{backgroundImage:`url(${props.img})`}}>
        <div className="content">
            <p>{props.msg}</p>
            <Link to={props.to} className="newInvLink">
            <Button 
                    variant="contained"
                    color="secondary"

                    startIcon={<EditIcon />}

                    >
                    {props.btn}
                </Button>
            </Link>
        </div>
        </header>
        </>
    );
}
 
export default Landing;