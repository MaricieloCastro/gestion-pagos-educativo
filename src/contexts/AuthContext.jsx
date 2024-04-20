import { createContext, useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

import { loginTokenApi, loginRefreshApi } from '../api/ApiRutas'

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);

    const [authTokens, setAuthTokens] = useState(() =>
        localStorage.getItem("authTokens")
            ? JSON.parse(localStorage.getItem("authTokens"))
            : null
    );
    const [user, setUser] = useState(() =>
        localStorage.getItem("authTokens")
            ? jwtDecode(localStorage.getItem("authTokens"))
            : null
    );

    const navigate = useNavigate();

    const loginUser = (values) => {

        axios
            .post(loginTokenApi, {
                username: values.username,
                password: values.password,
            })
            .then(function (response) {
                console.log("data", response.data);
                setAuthTokens(response.data);
                setUser(jwtDecode(response.data.access));
                localStorage.setItem("authTokens", JSON.stringify(response.data));
                navigate("/");
            })
            .catch(function (error) {
                console.log(error);
                alert("Something went wrong!");
            });
    };

    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem("authTokens");
        navigate("/login");
    };

    let updateToken = async () => {
        console.log("Update token called");
        let response = await fetch(loginRefreshApi, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "refresh": authTokens?.refresh })
        })
        let data = await response.json()

        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem("authTokens", JSON.stringify(data))
        } else {
            logoutUser();
        }

        if (loading) {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (loading) {
            updateToken();
        }

        const fourMinutes = 1000 * 60 * 4;
        let interval = setInterval(() => {
            if (authTokens) {
                updateToken()
            }
        }, fourMinutes)
        return () => clearInterval(interval)
    }, [authTokens, loading])

    const contextValue = useMemo(() => {
        return { user, loginUser, logoutUser, authTokens };
    }, [loginUser]);

    return (
        <AuthContext.Provider value={contextValue}>
            {loading ? null : children}
            {/* {children} */}
        </AuthContext.Provider>
    );
};