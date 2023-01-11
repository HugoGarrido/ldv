import NextDocument, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { Children } from 'react';
import { AppRegistry } from 'react-native';
import { ServerStyleSheet } from 'styled-components';
import Tamagui from '../tamagui.config';

export default class Document extends NextDocument {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    // Styled Components
    const styledComponentsSheet = new ServerStyleSheet();

    const { renderPage } = ctx;

    // React Native / Tamagui
    AppRegistry.registerComponent('Main', () => Main);

    try {
      const page = await renderPage({
        enhanceApp: (App) => (props) =>
          styledComponentsSheet.collectStyles(<App {...props} />),
      });

      // @ts-expect-error should use react-native-web typing
      const { getStyleElement } = AppRegistry.getApplication('Main');

      const styles = [
        styledComponentsSheet.getStyleElement(),
        getStyleElement(),
        <style
          key="tamagui-css"
          dangerouslySetInnerHTML={{ __html: Tamagui.getCSS() }}
        />,
      ];
      return { ...page, styles: Children.toArray(styles) };
    } finally {
      styledComponentsSheet.seal();
    }
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
