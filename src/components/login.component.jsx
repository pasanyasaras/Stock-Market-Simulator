import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
    button: {
      margin: theme.spacing(1),
    },
}));

export default function Login(){
    const classes = useStyles();
    return(
        <div>
        <form>
            <br/>
            <TextField
                id="outlined-name"
                label="User Name"
                className={classes.textField}
                margin="normal"
                variant="outlined"
            />
            <br/>
            <TextField
                id="outlined-password-input"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
            />
            <br/>
            <Button variant="contained" color="primary" className={classes.button}>
                Login
            </Button>
            </form>
        </div>
    )
}