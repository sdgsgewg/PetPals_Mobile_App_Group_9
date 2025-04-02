// UserContext.tsx
import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { UsersReducer, initialState, UserState } from "./UsersReducer";
import { GlobalAction } from "../GlobalActions";

// Create a context
export const UserContext = createContext<{
  state: UserState;
  dispatch: React.Dispatch<GlobalAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Define types for the UserProvider props
interface UserProviderProps {
  children: ReactNode;
}

// Create a provider component
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(UsersReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to use the UserContext
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
