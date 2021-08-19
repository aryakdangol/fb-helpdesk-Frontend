import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { useStateValue } from "../../StateProvider/StateProvider";

function Login() {
  const [state] = useStateValue();
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");
  const [login, setLogin] = useState(false);
  const responseFacebook = (response) => {
    console.log(response);
    state.login = true;
  };

  return (
    <div className="login">
      <div className="login-card">
        <FacebookLogin
          appId="360680822341504"
          autoLoad={true}
          fields="name,email,picture"
          scope="public_profile,user_friends"
          callback={responseFacebook}
          icon="fa-facebook"
        />
      </div>
    </div>
  );
}

export default Login;
