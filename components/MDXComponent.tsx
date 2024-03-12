import { getMDXComponent } from "mdx-bundler/client";
import Navbar from "./Navbar";

import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  ImgHTMLAttributes,
} from "react";
import SyntaxHighlighter from "./SyntaxHighlighter";
import Image from "next/image";

type Props = {
  code: string;
  globals?: Record<string, unknown> | undefined;
};

type ImageProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

type PreProps = React.ComponentType<
  DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>
>;

const Img: React.FC<ImageProps> = (props) => {
  const { src, alt, title } = props;

  if (!src) return;

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className="my-4 rounded-lg"
        src={src}
        alt={alt ?? "Image has no defined alternate text"}
      />

      {title && <label className="text-sm block">{title}</label>}
    </>
  );
};

const components = {
  pre: SyntaxHighlighter as PreProps,
  Navbar,
  img: Img,
};

function MDXComponent({ code, globals }: Props) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return <Component components={{ ...components }} />;
}

export default MDXComponent;
