import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "../Forms/Button";
import "./styles.scss";

import AuthWrapper from "./../AuthWrapper";
import FormInput from "./../Forms/FormInput";
// import Button from './../Forms/Button'
import { auth, signInWithGoogle } from "./../../firebase/utils";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      resetForm();
      props.history.push("/");
    } catch (err) {
      //console.log(err)
    }
  };

  const configAuthWrapper = {
    headline: "Login",
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={(e) => setEmail(e.target.value)}
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={(e) => setPassword(e.target.value)}
          />

          <div className="login ">
            <Button type="submit">Login</Button>
          </div>

          <div className="socialSignin">
            <div className="row">
              <Button onClick={signInWithGoogle}>Sign In With Google</Button>
            </div>
          </div>
          <div className="links">
            <Link to="/recovery">Reset Password</Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default withRouter(SignIn);
