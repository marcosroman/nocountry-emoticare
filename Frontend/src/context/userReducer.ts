import { UserState, User } from "./types";

type UserAction =
  | { type: "login"; payload: User }
  | { type: "logout"; };

export const userReducer = ( state: UserState, action: UserAction): UserState => {
  
  switch (action.type) {
    case "login":
      return { user: action.payload, authenticated: true };
    case "logout":
      return { authenticated: false };
    default:
      return state;
  }
};
