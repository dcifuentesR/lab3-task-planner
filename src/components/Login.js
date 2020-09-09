import React from '../../node_modules/react';
import Avatar from '../../node_modules/@material-ui/core/Avatar';
import Button from '../../node_modules/@material-ui/core/Button';
import CssBaseline from '../../node_modules/@material-ui/core/CssBaseline';
import FormControl from '../../node_modules/@material-ui/core/FormControl';
import Input from '../../node_modules/@material-ui/core/Input';
import InputLabel from '../../node_modules/@material-ui/core/InputLabel';
import LockIcon from '../../node_modules/@material-ui/icons/LockOutlined';
import Paper from '../../node_modules/@material-ui/core/Paper';
import Typography from '../../node_modules/@material-ui/core/Typography';
import './css/Login.css'

export class Login extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                <Typography variant="h2">Sign in</Typography>
                <Avatar className="avatar">
                        </Avatar>
                        
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <Button
                                onClick={(event) => {event.preventDefault();this.props.handleLogin(document.getElementById("email").value,document.getElementById("password").value)}}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Log in
                            </Button>
                        </form>
                    {/* <Paper className="paper">
                        
                    </Paper> */}
                </main>
            </React.Fragment>
        );
    }

}