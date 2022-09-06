import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render = () => (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* <div id="modal-root"></div>
        // SLUZI NPR KOD MODALA ILI NPR LIGHTBOX-A
        <div id="address-modal-root"></div> */}
      </body>
    </Html>
  );
}

export default CustomDocument;
