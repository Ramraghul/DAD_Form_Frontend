import React, { useEffect, useState } from 'react';
import { RenderFormFields } from '../util';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Lottie from 'react-lottie';
import File from '../anime/99297-loading-files.json'
import {API} from '../Config'

const useStyles = makeStyles(() => ({
    root: {
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
    },
    paper: {
        padding: '1rem',
        minHeight: '20rem',
        marginBottom: '1rem'
    },
    text: {
        textAlign: 'center'
    },
    group: {
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        padding: '2rem'
    }
}));

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: File,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const FormList = () => {
    const params = useParams()
    const classes = useStyles();
    const [forms, setformList] = useState({})

    var formView = async () => {
        try {
            let value = await axios.get(`${API.Link}/Viewform/${params.id}`)
                setformList(value.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        formView()
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {
                !forms.title ? <Lottie options={defaultOptions} height={300} width={300} /> : <Grid container spacing={4} className={classes.root}>
                    <Grid item xl={4} lg={4} md={2} sm={12} xs={12}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Typography variant="h4" className={classes.text} gutterBottom>{forms.title}</Typography>
                                </Grid>
                                {
                                    forms.fields.map(({ id, name, label, type }) =>
                                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} key={id}>
                                            <RenderFormFields
                                                name={name}
                                                label={label}
                                                type={type}
                                            />
                                        </Grid>
                                    )
                                }
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            }
        </>
    )
}

export default FormList;
