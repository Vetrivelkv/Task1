import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
  stepper: {},
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {},
  wrapper: {
    position: "relative",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
}));
