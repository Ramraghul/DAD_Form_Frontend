import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, TextField, Button } from '@material-ui/core';
const useStyles = makeStyles(() => ({
    paper: {
        display: 'flex',
        justifyContent: 'center',
        padding: '1rem',
    },
    button:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin:'auto'
    }
}));

const EditAddForm = ({ title, handleTitleChange, addForm, validationError}) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Grid container spacing={2}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField
                        error={!!validationError.title}
                        helperText={validationError.title}
                        fullWidth
                        variant="outlined"
                        label="Form Title"
                        name="title"
                        required
                        value={title}
                        onChange={handleTitleChange}
                    />
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={addForm}
                        className={classes.button}
                    >
                        Add Edit Form
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default EditAddForm;
