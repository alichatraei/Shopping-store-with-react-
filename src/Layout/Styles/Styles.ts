import { makeStyles, Theme, createStyles } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme): any => {
  return createStyles({
    header: {
      flexGrow: 1,
      backgroundColor: "white",
      height: "auto",
      padding: "1rem",
      display: "flex",
      alignItems: "center",
    },
    toolbar: {
      width: "100%",
      padding: "0",
      justifyContent: "space-between",
    },
    logoDiv: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContext: "start",
      alignItems: "center",
    },
    logoImage: {
      width: "auto",
      height: "100%",
    },
    Button: {
      color: "#ccc",
      padding: "1rem",
    },
  });
});
export default useStyles;
