import "../styles/globals.css";
import { theme } from "../theme/theme";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
