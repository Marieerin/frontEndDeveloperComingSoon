import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";


const Application = () => {
    const user = null;
    return (
        user ?
            <ProfilePage />
            :

            <Router>
                <SignUp path="signUp" />
                <SignIn path="/" />
                <PasswordReset path="passwordReset" />
            </Router>

    );
}
export default Application;