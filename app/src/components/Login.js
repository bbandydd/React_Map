import React from 'react'
import FacebookLogin from 'react-facebook-login';
import RaisedButton from 'material-ui/RaisedButton';

const Login = ({isLogin, fbLogin, logout}) => {
    return (
        <div>
            {
                !isLogin 
                ? <FacebookLogin
                    appId="726019197546139"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={fbLogin}
                    icon="fa-facebook"
                    />
                : <RaisedButton label="Logout" secondary={true} onClick={logout}/>
            }
        </div>
    )
}

export default Login