import { Grid, Button } from "@material-ui/core";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <Grid container alignItems="flex-end" className={styles.navContainer}>
      <Button>Home</Button>
      <Button>About</Button>
      <Button>Experience</Button>
      <Button>Projects</Button>
    </Grid>
  );
}
