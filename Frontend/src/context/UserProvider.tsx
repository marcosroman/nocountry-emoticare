import { useReducer } from "react";
import { UserContext } from "./UserContext";
import { userReducer } from "./userReducer";
import { User, UserState } from "./types";

type UserProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const initialState: UserState = {
  authenticated: false,
};

function UserProvider({ children }: UserProviderProps) {
  const [userState, dispatch] = useReducer(userReducer, initialState);

  const handleLogin = (user: User) => {
    dispatch({ type: "login", payload: user });
  };

  const handleLogout = () => {
    dispatch({ type: "logout"});
  };

  return (
    <UserContext.Provider value={{ userState, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
