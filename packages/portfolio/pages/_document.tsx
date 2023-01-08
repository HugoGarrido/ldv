import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { AppRegistry } from 'react-native';
import { Children } from 'react';
import { getStyleElement as getResponsiveQueryStyleElement } from 'native-base';

export default class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    AppRegistry.registerComponent('App', () => Main);
    const { getStyleElement } = AppRegistry.getApplication('App');

    const originalRenderPage = ctx.renderPage;

    const sheet = new ServerStyleSheet();

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        enhanceComponent: (Component) => Component,
      });

    const intialProps = await Document.getInitialProps(ctx);
    const styles = sheet.getStyleElement();

    const nativeStyles = getStyleElement();

    return {
      ...intialProps,
      styles: Children.toArray([
        styles,
        nativeStyles,
        getResponsiveQueryStyleElement(),
      ]),
    };
  }

  render() {
    return (
      <Html>
        <Head>{this.props.styles}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
