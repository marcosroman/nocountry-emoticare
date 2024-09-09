import { createContext } from "react";
import { User, UserState } from "../context/types";

type UserContextProps = {
  userState: UserState;
  handleLogin: (user : User) => void
  handleLogout: () => void
};

export const UserContext = createContext<UserContextProps>( // Fijos
  {} as UserContextProps
);
