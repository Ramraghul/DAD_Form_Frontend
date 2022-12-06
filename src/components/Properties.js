import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    paper: {
        display: 'flex',
        justifyContent:'center',
        padding: '1rem',
        minHeight:'20rem',
    },
    text:{
        textAlign:'center'
    },
    button:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin:'auto'
    }
}));

const Properties = ({addFormField, validationError, handleChange, fieldProperties}) => {
    
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Grid container spacing={1}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography
                        variant="h4" className={classes.text}
                    >
                        Field Area
                    </Typography>
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField 
                        error={!!validationError.name}
                        helperText={validationError.name}
                        fullWidth
                        variant="outlined"
                        label="Field Name"
                        name="name"
                        required
                        value={fieldProperties.name}
                        onChange={handleChange}
                    />
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField 
                        error={!!validationError.label}
                        helperText={validationError.label}
                        fullWidth
                        variant="outlined"
                        label="Label"
                        name="label"
                        required
                        value={fieldProperties.label}
                        onChange={handleChange}
                    />
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField 
                        error={!!validationError.type}
                        helperText={validationError.type}
                        fullWidth
                        variant="outlined"
                        label="Field Type"
                        name="type"
                        required
                        value={fieldProperties.type}
                        onChange={handleChange}
                    />
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={addFormField}
                        className={classes.button}
                    >
                        Add Form Field
                    </Button>
                </Grid>

            </Grid>
        </Paper>
    )
}

export default Properties;
