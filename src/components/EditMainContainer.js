import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { validator } from '../util';
import axios from 'axios';
import { API } from '../Config'
import Swal from 'sweetalert2';

import { Properties } from '.';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditDropable from './EditDropable';
import EditAddForm from './EditAddForm';

const useStyles = makeStyles(() => ({
    root: {
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    }
}));

const EditMainContainer = ({ Viewform }) => {
    const classes = useStyles();

    var datas = Viewform.fields
    var name =Viewform.title
    var id = Viewform._id

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const [dropableList, updateDropableList] = useState(datas);
    const [title, setTitle] = useState(name);
    const [validationError, setValidationError] = useState({});
    const [fieldProperties, setFieldProperties] = useState({
        _id:"",
        name: "",
        label: "",
        type: ""
    });

    const clearError = (fieldName) => {
        setValidationError({
            ...validationError,
            [fieldName]: "",
        });
    };

    const clearValues = () => {
        setFieldProperties({
            name: "",
            label: "",
            type: ""
        });
    };
    const clearTitle = () => {
        setTitle("");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFieldProperties({
            ...fieldProperties,
            [name]: value
        });
        clearError(name);
    };

    const handleTitleChange = (e) => {

        const { name, value } = e.target;
        setTitle(value);
        clearError(name);
    };

    const handleDropable = (result) => {

        if (!result.destination) return;
        const items = Array.from(dropableList);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        updateDropableList(items);

    };

    const addFormField = () => {

        validator.propertiesConsValidator(fieldProperties)
            .then(() => {
                fieldProperties.id = uuid();
                updateDropableList([...dropableList, fieldProperties]);
                clearValues();
                clearError();
            })
            .catch((error) => {
                setValidationError(error);
            })
    };


    const addForm = () => {
        validator.addFormConsValidator({ title })
            .then(async () => {
                const formObject = {
                    title,
                    fields: dropableList
                };
                try {
                    await axios.put(`${API.Link}/UpdateForm/${id}`, formObject)
                    Toast.fire({ icon: 'success', title: 'Update Done' })
                } catch (error) {
                    Toast.fire({ icon: 'warning', title: `something went wrong` })
                    console.log(error);
                }
                updateDropableList([]);
                clearTitle();
            })
            .catch((error) => {
                setValidationError(error);
            })
    };

    return (
        <Grid container spacing={4} className={classes.root}>

            {/* Properties Panel */}
            <Grid item xl={2} lg={3} md={3} sm={12} xs={12}>
                <Properties
                    addFormField={addFormField}
                    handleChange={handleChange}
                    validationError={validationError}
                    fieldProperties={fieldProperties}
                />
            </Grid>

            {/* Dragable Panel */}
            <Grid item xl={4} lg={7} md={4} sm={12} xs={12}>
                <EditDropable
                    dropableList={dropableList}
                    handleDropable={handleDropable}
                />
                {
                    dropableList.length > 0 ? (
                        <EditAddForm
                            title={title}
                            handleTitleChange={handleTitleChange}
                            addForm={addForm}
                            validationError={validationError}
                        />
                    ) : null
                }

            </Grid>
        </Grid>
    )
}

export default EditMainContainer;
