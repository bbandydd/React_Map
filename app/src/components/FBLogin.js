import React from 'react'
import FacebookLogin from 'react-facebook-login';
import RaisedButton from 'material-ui/RaisedButton';

const FBLogin = ({isLogin, login, logout}) => {
    return (
        <div>
            {
                !isLogin 
                ? <FacebookLogin
                    appId="726019197546139"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={login}
                    icon="fa-facebook"
                    />
                : <RaisedButton label="Logout" secondary={true} onClick={logout}/>
            }
        </div>
    )
}

export default FBLogin