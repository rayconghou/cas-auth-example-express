import Button from "@mui/material/Button";
import axios from "../utils/axios";

const SignOutButton = () => (
  <Button
    variant="contained"
    onClick={() => axios.get("/logout")}
    href={`http://localhost:4000/cas?redirect=${window.location.origin}`}
  >
    Sign Out
  </Button>
);

export default SignOutButton;
