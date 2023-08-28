import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Age Calculator"
        description="age calculator from birthday."
        canonical="http://www.exactagecalculator.com/"
        openGraph={{
          url: "http://www.exactagecalculator.com/",
          title: "age calculator from birthday",
          description: "age calculator from birthday.",
          site_name: "age calculator from birthday",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}


export default MyApp;

