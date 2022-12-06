import React from 'react';
import { TextField, Button } from '@material-ui/core';

const RenderFormFields = ({id,type, name, label}) => {
    
    switch(type) {
        case "button":  return(<Button variant="contained" color="primary" name={name} id={id}> {label} </Button>); 
        
        default: return(<TextField name = {name} type= {type} fullWidth variant="outlined" label= {label} id={`outlined-basic-${id}`} />);
    }
    
}

export default RenderFormFields;
