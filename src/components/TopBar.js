import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Link, Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AmpStoriesIcon from '@material-ui/icons/AmpStories';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: '1rem',
        backgroundColor:"#8851ed"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: theme.palette.primary.contrastText,
        marginLeft: '1rem'
    },
    createButton: {
        marginLeft: '1rem'
    }
}));
const TopBar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <AmpStoriesIcon fontSize="large" />
                <Typography variant="h4" className={classes.title}>
                    Form Create
                </Typography>
                <Link
                    href="/"
                    className={classes.createButton}>
                    <Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            startIcon={<HomeIcon fontSize="small" />}
                            className={classes.button}
                        >
                            Home
                        </Button>
                    </Typography>
                </Link>
                <Link
                    href="/form/create"
                    className={classes.createButton}>
                    <Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            startIcon={<AddCircleOutlineIcon fontSize="small" />}
                            className={classes.button}
                        >
                            Create Form
                        </Button>
                    </Typography>
                </Link>

            </Toolbar>
        </AppBar>
    )
}

export default TopBar;
