import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  ReactNode,
} from "react";
import { UserObject } from "@/utils/types";

type AuthContextAction =
  | { type: "SET_USER"; payload: UserObject | null }
  | { type: "SET_LOADING"; payload: boolean };

type AuthContextType = {
  loading: boolean;
  user: UserObject | null;
  dispatch: React.Dispatch<AuthContextAction>;
};

const initialState: AuthContextType = {
  loading: false,
  user: null,
  dispatch: () => {},
};

const AuthContext = createContext<AuthContextType>(initialState);

export function useAuthContext() {
  return useContext(AuthContext);
}

function authReducer(
  state: AuthContextType,
  action: AuthContextAction
): AuthContextType {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider: React.FC<AuthProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const value: AuthContextType = {
    ...state,
    dispatch,
  };

  useEffect(() => {
    // Here you can add logic to fetch user data on mount
    // and dispatch appropriate actions to set the user and loading state.
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
