import { createContext } from "react";

import { User } from "../types";

export const defaultUserContext = {
  loading: true,
  isAuthenticated: false,
  checkContext: () => {},
  clearContext: () => {},
};

export default createContext<{
  loading: boolean;
  isAuthenticated: boolean;
  user?: User;
  checkContext: () => void;
  clearContext: () => void;
}>(defaultUserContext);
