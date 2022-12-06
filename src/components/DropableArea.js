import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';
import { RenderFormFields } from '../util';
const useStyles = makeStyles(() => ({
    paper: {
        padding: '1rem',
        minHeight: '20rem',
        marginBottom: '1rem',
        display:'flex',
        textAlign:'center',
        border:'dashed'
    }
}));

const DropableArea = ({ dropableList, handleDropable }) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Grid container spacing={2}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography
                        variant="h4"
                    >
                        Draggable Form Fields  
                    </Typography>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <DragDropContext onDragEnd={handleDropable}>
                        <Droppable droppableId="personsList">
                            {
                                (provided) => (
                                    <Grid container spacing={2} {...provided.droppableProps} ref={provided.innerRef}>
                                        {
                                            dropableList.map(({ id, name, label, type }, index) => {
                                                return (
                                                    <Draggable key={id} draggableId={id} index={index}>
                                                        {
                                                            (provided) => (

                                                                <Grid key={id} item xl={12} lg={12} md={12} sm={12} xs={12} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                    <RenderFormFields
                                                                        name={name}
                                                                        label={label}
                                                                        type={type}
                                                                    />
                                                                </Grid>
                                                            )
                                                        }
                                                    </Draggable>
                                                )
                                            })
                                        }
                                        {provided.placeholder}
                                    </Grid>
                                )
                            }
                        </Droppable>
                    </DragDropContext>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default DropableArea;
