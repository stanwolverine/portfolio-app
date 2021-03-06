import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='UTF8' />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Open+Sans+Condensed|Open+Sans|Oswald|EB+Garamond|Montserrat|Merriweather|Raleway|Roboto+Slab|Roboto|Playfair+Display|Source+Sans+Pro|Alegreya|Lato&display=swap'
          />
          <script
            src='https://kit.fontawesome.com/849b812d02.js'
            crossOrigin='anonymous'
          ></script>
          <style>
            {`
							*,
							*::after,
							*::before {
								padding: 0;
								margin: 0;
								box-sizing: inherit;
							}
							
							html {
									font-size: 62.5%;
							}

							body {
								box-sizing: border-box;
								font-family: Roboto, sans-serif;
								font-weight: 400;
								line-height: 1.6;
							}
						`}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
