import { makeStyles, Theme, createStyles } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme): any => {
  return createStyles({
    header: {
      flexGrow: 1,
      minHeight: "10vh",
      backgroundColor: "red",
      display: "flex",
      alignItems: "center",
    },
  });
});
export default useStyles;
