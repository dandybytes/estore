import React from "react";
import "./UserLogin.scss";

import UserIcon from "../../icons/UserIcon";

const UserLogin = () => {
    return (
        <div className="user-login">
            <UserIcon size={20} fill="white" />
            <span className="login-message">Log In</span>
        </div>
    );
};

export default UserLogin;
