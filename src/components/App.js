/** @format */
import React, { useState, useEffect } from "react";
import LocalStore from "./LocalStore";
import Editor from "./Editor";
import Header from "./Header";

export const App = () => {
  const [html, setHtml] = LocalStore("html", "");
  const [css, setCss] = LocalStore("css", "");
  const [js, setJs] = LocalStore("js", "");
  const [sourceDoc, setDoc] = useState("");
  useEffect(() => {
    const timOut = setTimeout(() => {
      setDoc(
        `<html>
        <body>
        ${html}
        </body>
        <style>
        ${css}
        </style>
        <script>
        ${js}
        </script>
        </html>`
      );
    }, 300);

    return () => clearTimeout(timOut);
  }, [html, css, js]);

  const editors = [
    { lang: `xml`, disName: `HTML`, value: html, onChange: setHtml },
    { lang: `css`, disName: `CSS`, value: css, onChange: setCss },
    { lang: `javaScript`, disName: `JS`, value: js, onChange: setJs },
  ];

  return (
    <div className="h-screen bg-gray-100">
      <Header />
      <div className="flex">
        {editors.map(e => {
          return <Editor key={e.lang} {...e} />;
        })}
      </div>

      <div className="h-1/2">
        <iframe
          src=""
          frameBorder="0"
          srcDoc={sourceDoc}
          title="output"
          width="100%"
          height="100%"
          sendBox="allow-script "
        />
      </div>
    </div>
  );
};

export default App;
