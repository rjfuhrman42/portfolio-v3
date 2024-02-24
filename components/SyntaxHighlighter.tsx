"use client";

import { Highlight, themes } from "prism-react-renderer";

import React from "react";

const SyntaxHighlighter = ({ children }: { children: React.ReactNode }) => {
  const code = React.isValidElement(children) ? children.props.children : "";

  return (
    <Highlight theme={themes.vsDark} code={code} language="tsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className="container rounded-lg text-sm overflow-y-scroll"
          style={style}
        >
          <div className="w-full p-2 bg-dark-blue text-right">
            <span className="pr-2">TSX</span>
          </div>
          <div className="p-4">
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, className: "py-0.5" })}>
                {/* <span className="pr-4">{i + 1}</span> */}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </div>
        </pre>
      )}
    </Highlight>
  );
};

export default SyntaxHighlighter;
