import { FC, useEffect, useState } from "react";
import swal from "sweetalert";

import axios from "../utils/axios";
import UserContext from "../contexts/UserContext";
import { User } from "../types";

const UserContextProvider: FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    axios
      .get<{ auth: boolean; user?: User }>("/check")
      .then(({ data }) => {
        if (data.auth) {
          setIsAuthenticated(true);
          setUser(data.user);
        }
      })
      .catch(() =>
        swal({
          text: "Something went wrong while trying to fetch your auth status.",
          icon: "warning",
        })
      );

    setLoading(false);
  }, []);

  return (
    <UserContext.Provider value={{ loading, isAuthenticated, user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
