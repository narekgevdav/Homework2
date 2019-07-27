import React from 'react';
import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';

import firebase from 'firebase'

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignInSide(props) {
    const classes = useStyles();
    const [name, setName] = useState();
    const [login, setLogin] = useState();    
    const [password, setPassword] = useState();
    const [verifyPassword, setVerifyPassword] = useState();
    const [open, setOpen] = useState(false)
    function myname(event) {
        setName(event.target.value)
    };
    function mylogin(event) {
        setLogin(event.target.value)
    };
    function mypass(event) {
        setPassword(event.target.value)
    };
    function myverifypass(event) {
        setVerifyPassword(event.target.value)
    };
    let us;
    function signup() {
        if(password === verifyPassword){
        firebase.auth().createUserWithEmailAndPassword(login, password).then(function(user){us=user;window.location.replace('/edit')})
        .catch(function(error){console.log(error)})
        }
        else setOpen(true)
    }
    return (<div>
      
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
          </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            onChange={myname}
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            onChange={mylogin}
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            n
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            onChange={mypass}
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                         <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            onChange={myverifypass}
                            name="verifyPassword"
                            label="Verify Password"
                            type="password"
                            id="verifyPassword"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            fullWidth
                            onClick={signup}
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign up
            </Button>
            <Snackbar
                    open={open}
                    onClose={() => setOpen(false)}
                    >
                        password don't match
                    </Snackbar>
            
                        {/* <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                </Link>
                            </Grid>
                            <Grid item>
                                <Link to='/login' >
                                    Have an account</Link>
                            </Grid>
                        </Grid> */}
                        <Box mt={5}>

                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    </div>);
}