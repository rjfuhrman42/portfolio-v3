"use client";

import { useTheme } from "next-themes";
import { Highlight, themes } from "prism-react-renderer";

import React from "react";

const SyntaxHighlighter = ({ children }: { children: React.ReactNode }) => {
  const code = React.isValidElement(children) ? children.props.children : "";
  const fileName = React.isValidElement(children)
    ? (children.props as { className: string }).className
    : "";

  // Get the language type from the file name
  const extension = fileName?.match(/\.[0-9a-z]+$/gm);
  const language = extension ? extension[0].slice(1) : "";

  const theme = useTheme().theme;

  return (
    <div className="relative container md:max-w-3xl">
      <Highlight
        theme={
          theme === "dark" || !theme ? themes.nightOwl : themes.nightOwlLight
        }
        code={code}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className="border border-darkest-gray w-[85vw] ml-0 md:mx-[-1.75rem] whitespace-auto md:w-[45rem] my-8 rounded-lg text-sm overflow-x-hidden"
            style={style}
          >
            <div className="p-2 bg-[#f1f1f1] dark:bg-[#001634] border-b border-darkest-gray text-right">
              <span className="pr-2 text-black dark:text-accent-blue uppercase">
                {language}
              </span>
            </div>
            <div className="p-4 overflow-x-auto">
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
    </div>
  );
};

export default SyntaxHighlighter;
