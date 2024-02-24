import { getMDXComponent } from "mdx-bundler/client";
import Navbar from "./Navbar";

import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import SyntaxHighlighter from "./SyntaxHighlighter";

type Props = {
  code: string;
  globals?: Record<string, unknown> | undefined;
};

type ParagraphProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

type PreProps = React.ComponentType<
  DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>
>;

const Paragraph: React.FC<ParagraphProps> = (props) => {
  if (typeof props.children !== "string") {
    return;
  }

  return <p className="postParagraph" {...props} />;
};

const components = {
  p: Paragraph,
  pre: SyntaxHighlighter as PreProps,
  Navbar,
};

function MDXComponent({ code, globals }: Props) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return <Component components={components} />;
}

export default MDXComponent;
