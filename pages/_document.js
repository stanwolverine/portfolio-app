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
					<meta http-equiv='X-UA-Compatible' content='ie=edge' />
					<style>
						{`
							@import url(https://fonts.googleapis.com/css?family=Abril+Fatface|Fjalla+One|Roboto|Oswald|Julius+Sans+One|Monoton|Titillium+Web:300,400,700|Ubuntu+Condensed&display=swap);

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
					<title>Jatin Nagar</title>
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
