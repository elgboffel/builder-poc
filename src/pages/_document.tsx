import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { theme } from "@styles/theme.css";

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta name={"robots"} content={"noindex,nofollow"} />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className={theme}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
