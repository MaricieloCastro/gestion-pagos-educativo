import { createContext, useState, useEffect, useMemo } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

import {
  LOGIN_TOKEN_API,
  LOGIN_REFRESH_API,
  LOGOUT_API,
} from "../api/ApiRutas";
import { toast } from "react-toastify";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

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

  const [refreshHelp, setRefreshHelp] = useState(() =>
    localStorage.getItem("refreshHelp")
      ? JSON.parse(localStorage.getItem("refreshHelp"))
      : null
  );

  const loginUser = (values) => {
    const { username, password } = values;

    axios
      .post(LOGIN_TOKEN_API, {
        username: username,
        password: password,
      })
      .then(function (response) {
        setAuthTokens(response.data);
        console.log(response);
        setUser(jwtDecode(response.data.access));
        setRefreshHelp(response.data.refresh);
        localStorage.setItem("authTokens", JSON.stringify(response.data));
        localStorage.setItem(
          "refreshHelp",
          JSON.stringify(response.data.refresh)
        );
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
        toast.error("ALGO SALIÓ MAL");
      });
  };

  let updateToken = async () => {
    console.log("Update token called");

    const headers = {
      "Content-Type": "application/json",
    };

    const dataLoginRefresh = { refresh: refreshHelp };

    if (authTokens != null) {
      try {
        const response = await axios.post(LOGIN_REFRESH_API, dataLoginRefresh, {
          headers,
        });
        console.log("operacion exitosa:", response);

        const data = response.data;

        setAuthTokens(data);
        setUser(jwtDecode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
      } catch (err) {
        console.error(err);
        setAuthTokens(null);
        setUser(null);
        setRefreshHelp(null);
        localStorage.removeItem("authTokens");
        localStorage.removeItem("refreshHelp");
      }
    }

    if (loading) {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    await axios
      .post(LOGOUT_API, {
        username: user.username,
        refresh: refreshHelp,
      })
      .then(function (response) {
        setAuthTokens(null);
        setUser(null);
        setRefreshHelp(null);
        localStorage.removeItem("authTokens");
        localStorage.removeItem("refreshHelp");
        navigate("/login");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        navigate("/login");
      });
  };

  useEffect(() => {
    if (loading) {
      updateToken();
    }

    const fourMinutes = 1000 * 60 * 4;
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourMinutes);

    return () => clearInterval(interval);
  }, [authTokens, loading]);

  const contextValue = useMemo(() => {
    return { user, loginUser, logoutUser, authTokens };
  }, [loginUser]);

  return (
    <AuthContext.Provider value={contextValue}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
