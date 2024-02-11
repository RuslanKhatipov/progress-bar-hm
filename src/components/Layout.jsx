import React from 'react';

export default function Layout({ children, initState }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script defer src="/app.js" />
        <script defer src="/vendor.js" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />

        <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin />

        <script
          src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
          crossOrigin
        />

        <script
          src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossOrigin
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.initState=${JSON.stringify(initState)}`,
          }}
        />
        <title>Document</title>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
