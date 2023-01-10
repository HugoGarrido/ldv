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
import Tamagui from '../tamagui.config';

export default class Document extends NextDocument {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const { renderPage } = ctx;
    AppRegistry.registerComponent('Main', () => Main);
    const page = await renderPage();

    // @ts-expect-error should use react-native-web typing
    const { getStyleElement } = AppRegistry.getApplication('Main');
    const styles = [
      getStyleElement(),
      <style
        key="tamagui-css"
        dangerouslySetInnerHTML={{ __html: Tamagui.getCSS() }}
      />,
    ];
    return { ...page, styles: Children.toArray(styles) };
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
