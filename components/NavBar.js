import { Grid } from "@material-ui/core";
import styles from "../styles/NavBar.module.css";
import styled from "styled-components";

const NavItem = styled.li`
  display: inline-block;
  margin-left: 70px;
  padding-top: 25px;
  position: relative;
`;

const NavText = styled.a`
  color: #444;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;

  :hover {
    color: #000;
  }

  ::before {
    content: "";
    display: block;
    height: 5px;
    background-color: #444;
    position: absolute;
    top: 0;
    width: 0%;

    transition: all ease-in-out 250ms;
  }

  :hover::before {
    width: 100%;
  }
`;

const NavLogo = styled.h1`
  font-family: Trebuchet;
  font-size: 38px;
  line-height: 0.9;
  font-weight: 500;
  margin-left: 20px;
`;

export default function NavBar() {
  return (
    <nav>
      <Grid container alignItems="flex-start" justify="space-between">
        <NavLogo>Alejandro Munoz</NavLogo>
        <ul className={styles.navContainer}>
          <NavItem>
            <NavText href="#">Home</NavText>
          </NavItem>
          <NavItem>
            <NavText href="#">About</NavText>
          </NavItem>
          <NavItem>
            <NavText href="#">Experience</NavText>
          </NavItem>
          <NavItem>
            <NavText href="#">Projects</NavText>
          </NavItem>
          <NavItem>
            <NavText href="#">Contact</NavText>
          </NavItem>
        </ul>
      </Grid>
    </nav>
  );
}
