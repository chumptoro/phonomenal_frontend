// document.js is a boiler plate file from https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/_document.js .  It allows styled-compoment to support server side rendering in NextJS.  This solves the problem of the non-styled HTMl showing up the a beep second when we first load a page (https://courses.wesbos.com/account/access/5f1a220d13180209c92ce114/view/289536576)
//nextJS solves this same problem for itself using getInitiaProps.

// (see https://nextjs.org/docs/api-reference/data-fetching/)getInitialProps

//see https://nextjs.org/docs/advanced-features/custom-document

//renderPage: https://nextjs.org/docs/advanced-features/custom-document - a callback that runs the actual React rendering logic (synchronously)

import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      //sheet.seal();
    }
  }
}