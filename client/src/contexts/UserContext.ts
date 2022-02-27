import { createContext } from "react";

import { User } from "../types";

export const defaultUserContext = {
  loading: true,
  isAuthenticated: false,
};

export default createContext<{
  loading: boolean;
  isAuthenticated: boolean;
  user?: User;
}>(defaultUserContext);
