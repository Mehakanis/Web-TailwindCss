// _app.js or _app.tsx
import { AppProps } from "next/app";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically



function MyApp({ Component, pageProps }:AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
