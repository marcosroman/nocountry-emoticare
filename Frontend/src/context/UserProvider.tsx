import { useEffect, useReducer } from "react";
import { UserContext } from "./UserContext";
import { userReducer } from "./userReducer";
import { User, UserState } from "./types";
import { authenticate } from '../api/auth';

type UserProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const initialState: UserState = {
  authenticated: false,
};

function UserProvider({ children }: UserProviderProps) {
  // UseReducer y sus actions
  const [userState, dispatch] = useReducer(userReducer, initialState);

  const handleLogin = (user: User) => {
    dispatch({ type: "login", payload: user });
  };

  const handleLogout = () => {
    dispatch({ type: "logout" });
  };

  const initialRefresh = (state: UserState) => {
    dispatch({ type: "init", payload: state });
  };

  // UseState de la sesión del Usuario

  useEffect(() => {
    const verifyAuth = async () => {
      const response = await authenticate();
      return response;
    };

    verifyAuth().then((res) => {
      initialRefresh(res)
    });

  }, []);

  return (
    <UserContext.Provider value={{ userState, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
