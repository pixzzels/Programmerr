import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";

const LogoutButton = () => {
    const dispatch = useDispatch();
    const onLogout = async (e) => {
        dispatch(logout());
    };

    return <button onClick={onLogout} style={{
        color: "black",
        backgroundColor: "white",
        border: "0px",
        fontWeight: "bold",
        fontSize: "16px",
        borderRadius:"4px",
        padding:"5px"
    }}> Logout</ button>;
};

export default LogoutButton;
