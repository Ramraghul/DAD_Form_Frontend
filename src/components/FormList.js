import React, { useEffect, useState } from 'react';
import { RenderFormFields } from '../util';
import { makeStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup, Grid, Paper, Typography } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {API} from '../Config'

const useStyles = makeStyles(() => ({
    root: {
        padding: '2rem'
    },
    paper: {
        padding: '1rem',
        minHeight: '20rem',
        marginBottom: '1rem'
    },
    text: {
        textAlign: 'center'
    },
    group:{
        display:'flex',
        justifyContent:'center',
        margin:'auto',
        padding:'2rem'
    }
}));


const FormList = () => {
    const classes = useStyles();
    const [formList, setformList] = useState([])

    const navigate = useNavigate()

    var ViewForm = (data) => {
        navigate(`/form/${data._id}`)
    }

    var EditForm = (data) => {
        navigate(`/form/edit/${data._id}`)
    }

    useEffect(() => {
        allForm()
    }, []);

    var allForm = async () => {
        try {
            let check = await axios.get(`${API.Link}/allforms`)
            setformList(check.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    if (formList.length === 0) {
        return null;
    }
    return (
        <Grid container spacing={4} className={classes.root}>

            {
                formList.map((form, index) =>
                    <Grid item xl={4} lg={4} md={2} sm={12} xs={12} key={index}>
                        <Paper key={form.fields.id} className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Typography variant="h4" className={classes.text} gutterBottom>{form.title}</Typography>
                                </Grid>
                                {
                                    form.fields.map(({ id, name, label, type }) =>
                                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} key={id}>
                                            <RenderFormFields
                                                name={name}
                                                label={label}
                                                type={type}
                                            />
                                        </Grid>
                                    )
                                }
                                <ButtonGroup variant="text" aria-label="text button group" className={classes.group}>
                                    <Button onClick={() => { ViewForm(form) }}><VisibilityIcon fontSize="small" /></Button>
                                    <Button onClick={() => { EditForm(form) }}><EditIcon fontSize="small" /></Button>
                                </ButtonGroup>
                            </Grid>
                        </Paper>
                    </Grid>
                )
            }
        </Grid>
    )
}

export default FormList;
