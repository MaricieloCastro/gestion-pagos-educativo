import {
  createContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

import { loginTokenApi, loginRefreshApi, lastLogoutApi } from "../api/ApiRutas";
import { toast } from "react-toastify";

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
        setAuthTokens(response.data);
        console.log(response)
        setUser(jwtDecode(response.data.access));
        localStorage.setItem("authTokens", JSON.stringify(response.data));
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
        toast.error("ALGO SALIÓ MAL");
      });
  };

  const logoutUser = async () => {
    await axios
      .post(lastLogoutApi, {
        username: user.username,
      })
      .then(function (response) {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem("authTokens");
        navigate("/login");
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
        navigate("/login");
      });
  };

  let updateToken = async () => {
    console.log("Update token called");
    console.log(authTokens)

    let response = await fetch(loginRefreshApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: authTokens?.refresh }),
    });

    let data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    }

    if (loading) {
      setLoading(false);
    }
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
