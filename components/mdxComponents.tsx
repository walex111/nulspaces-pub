import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { highlight } from "sugar-high";

type Props = React.HTMLAttributes<HTMLElement>;

const components = {
  h1: (props: Props) => (
    <h1
      className="text-5xl md:text-6xl lg:text-7xl font-light pt-12 mb-12 text-ink-text dark:text-paper-text tracking-tighter leading-[1.1]"
      {...props}
    />
  ),
  h2: (props: Props) => (
    <h2
      className="text-3xl md:text-4xl lg:text-5xl font-medium mt-16 mb-6 text-ink-text dark:text-paper-text tracking-tight leading-tight"
      {...props}
    />
  ),
  h3: (props: Props) => (
    <h3
      className="text-2xl md:text-3xl lg:text-4xl font-medium mt-12 mb-4 text-ink-text dark:text-paper-text tracking-tight leading-snug"
      {...props}
    />
  ),

  p: ({ children, ...props }: Props) => (
    <p
      className="text-lg leading-[1.85] text-zinc-700 dark:text-zinc-300 mb-8 antialiased"
      {...props}
    >
      {children}
    </p>
  ),

  blockquote: (props: Props) => (
    <blockquote className="relative my-12 py-1 pl-8 border-l-2 border-ink-text dark:border-paper-text">
      <div
        className="italic text-2xl md:text-3xl text-ink-text dark:text-paper-text leading-relaxed opacity-90"
        {...props}
      />
    </blockquote>
  ),

  code: ({ children, ...props }: Props) => {
    const codeHTML = highlight(children as string);
    return (
      <code
        className="font-mono text-[14px] bg-zinc-100 dark:bg-ink px-1.5 py-0.5 rounded transition-colors border border-zinc-200/50 dark:border-zinc-800/50"
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        {...props}
      />
    );
  },

  a: ({ href, children, ...props }: ComponentPropsWithoutRef<"a">) => {
    const isAmazon = href?.includes("amazon.com");
    let finalHref = href;

    if (isAmazon && href) {
      try {
        const url = new URL(href);
        url.searchParams.set("tag", "nulspaces-20");
        finalHref = url.toString();
      } catch {
        finalHref = href;
      }
    }

    const className =
      "font-medium text-ink-text dark:text-paper-text underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-[5px] hover:decoration-ink-text dark:hover:decoration-paper-text transition-all cursor-pointer";

    if (finalHref?.startsWith("/")) {
      return (
        <Link href={finalHref} className={className} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={finalHref}
        target="_blank"
        rel={isAmazon ? "noopener noreferrer sponsored" : "noopener noreferrer"}
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },

  span: (props: Props) => (
    <span
      className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mt-16 mb-4 block"
      {...props}
    />
  ),

  ul: (props: Props) => (
    <ul
      className="text-lg list-disc pl-6 mb-8 space-y-3 text-zinc-700 dark:text-zinc-300"
      {...props}
    />
  ),
  ol: (props: Props) => (
    <ol
      className="text-lg list-decimal pl-6 mb-8 space-y-3 text-zinc-700 dark:text-zinc-300"
      {...props}
    />
  ),
  li: (props: Props) => <li className="pl-2" {...props} />,

  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <div className="my-10 overflow-x-auto border-y border-zinc-100 dark:border-zinc-800/50">
      <table className="w-full font-mono text-[13px] text-left">
        <thead>
          <tr className="text-zinc-400 dark:text-zinc-500 uppercase tracking-tighter">
            {data.headers.map((h, i) => (
              <th key={i} className="py-4 px-3 font-normal">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-50 dark:divide-ink">
          {data.rows.map((row, i) => (
            <tr
              key={i}
              className="hover:bg-zinc-50/50 dark:hover:bg-ink transition-colors"
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="py-4 px-3 text-zinc-600 dark:text-zinc-400"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
};

export const mdxComponents = components;
