import { UserState, User } from './types';

type UserAction =
  | { type: "login"; payload: User }
  | { type: "logout"; }
  | { type: "init"; payload: UserState }

export const userReducer = ( state: UserState, action: UserAction): UserState => {
  
  switch (action.type) {
    case "login":
      return { user: action.payload, authenticated: true };
    case "logout":
      return { authenticated: false };
    case "init":
      return {user: action.payload.user, authenticated: action.payload.authenticated }
    default:
      return state;
  }
};
