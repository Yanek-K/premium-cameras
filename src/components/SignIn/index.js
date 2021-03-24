import React from "react";
import Button from "../Forms/Button";
import "./styles.scss";

import { signInWithGoogle } from "./../../firebase/utils";

const SignIn = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="signin">
      <div className="wrap">
        <h2>LogIn</h2>
        <div className="formWrap">
          <form onSubmit={handleSubmit}>
            <div className="socialSignin">
              <div className="row">
                <Button onClick={signInWithGoogle} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
