import { createContext } from "react";

export const defaultUserContext = {
  loading: true,
  isAuthenticated: false,
};

export default createContext<{
  loading: boolean;
  isAuthenticated: boolean;
  netId?: string;
}>(defaultUserContext);
