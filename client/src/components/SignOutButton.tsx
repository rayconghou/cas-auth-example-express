import Button from "@mui/material/Button";
import { useContext } from "react";

import axios from "../utils/axios";
import UserContext from "../contexts/UserContext";

const SignOutButton = () => {
  const { clearContext } = useContext(UserContext);
  return (
    <Button
      variant="contained"
      color="error"
      onClick={() =>
        axios.get<{ success: boolean }>("/logout").then(({ data }) => {
          if (data.success) {
            clearContext();
          }
        })
      }
      href={`http://localhost:4000/cas?redirect=${window.location.origin}`}
    >
      Sign Out
    </Button>
  );
};

export default SignOutButton;
