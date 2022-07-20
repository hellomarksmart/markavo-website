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
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
        `,
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.SMITH={},window.SMITH.smithChatAccount="bbaa9b5f-3188-48b6-ac1d-920381a0e491",window.SMITH.baseUrl="https://app.smith.ai"; var script=document.createElement("script"); script.async=!0, script.type="text/javascript",script.src="https://app.smith.ai/chat/widget-latest.js",document.getElementsByTagName("HEAD").item(0).appendChild(script);
              `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.ap3c = window.ap3c || {};
                  var ap3c = window.ap3c;
                  ap3c.cmd = ap3c.cmd || [];
                  ap3c.cmd.push(function() {
                  ap3c.init('Yrt10H7Kx7zwJqHrbWFya2F2b2NvbQ', 'https://capture-api.autopilotapp.com/');
                  ap3c.track({v: 0});
                  });
                  var s, t; s = document.createElement('script'); s.type = 'text/javascript'; s.src = "https://cdn3l.ink/app.js";
                  t = document.getElementsByTagName('script')[0]; t.parentNode.insertBefore(s, t);
              `,
          }}
        />
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