import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script
          defer
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window.Trengo = window.Trengo || {};
              window.Trengo.key = 'dPxY5RAnZodvssX';
              (function(d, script, t) {
                script = d.createElement('script');
                script.type = 'text/javascript';
                script.async = true;
                script.src = 'https://static.widget.trengo.eu/embed.js';
                d.getElementsByTagName('head')[0].appendChild(script);
              }(document));
        `,
          }}
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
