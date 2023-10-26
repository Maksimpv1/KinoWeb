import { Navigate } from "react-router-dom"

import { useAuth } from "../registration/auth";

export const Profile = () =>{
    const { isAuth, email } = useAuth();
    return isAuth ? (
        <div>
            <h2>Добро пожаловать в профиль</h2>
        </div>
    ) :(
        <Navigate to="/Login"/>
    )
}   