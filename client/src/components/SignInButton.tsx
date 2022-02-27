import axios from "axios";
import Button from "@mui/material/Button";
import { useCallback } from "react";

type Props = {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};

const SignInButton = ({ setIsAuthenticated }: Props) => {
  const onClick = useCallback(async () => {
    const res = await axios.get("http://localhost:4000/cas");
    console.log(res);
  }, []);

  return (
    <Button variant="contained" onClick={onClick}>
      Sign in With Yale CAS
    </Button>
  );
};

export default SignInButton;
