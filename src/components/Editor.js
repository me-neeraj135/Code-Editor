/** @format */

import React from "react";
import { Controlled as Codemirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled, Controlled as ControlledEditor } from "react-codemirror2";

function Editor(props) {
  let { lang, value, onChange, disName } = props;
  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <div className="grow shrink-0 w-1/4 p-2 bg-slate-800 h-full">
      <div className="bg-zinc-900 text-white flex justify-between">
        {disName}
        <button className="border-solid border-2 border-indigo-600 p-1">
          》《
        </button>
      </div>
      <ControlledEditor
        className="overflow-hidden h-80"
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineWrapping: true,
          lint: true,
          mode: lang,
          theme: `material`,
          lineNumbers: true,
        }}
      />
    </div>
  );
}

export default Editor;
