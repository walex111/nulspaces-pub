"use client";
import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { highlight } from "sugar-high";

type Props = React.HTMLAttributes<HTMLElement>;

const components = {
  h1: (props: Props) => (
    <h1
      className="text-4xl md:text-5xl font-light pt-12 mb-8 text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight"
      {...props}
    />
  ),
  h2: (props: Props) => (
    <h2
      className="text-2xl md:text-3xl font-medium mt-16 mb-4 text-zinc-800 dark:text-zinc-100"
      {...props}
    />
  ),
  h3: (props: Props) => (
    <h3
      className="text-xl md:text-2xl font-medium mt-10 mb-3 text-zinc-800 dark:text-zinc-200"
      {...props}
    />
  ),

  p: ({ children, ...props }: Props) => (
    <p
      className="text-[17px] leading-[1.8] text-zinc-700 dark:text-zinc-300 mb-6 antialiased first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-5xl first-letter:font-semibold first-letter:leading-none first-letter:text-zinc-950 dark:first-letter:text-zinc-50"
      {...props}
    >
      {children}
    </p>
  ),

  blockquote: (props: Props) => (
    <blockquote className="relative my-12 py-1 pl-8 border-l-2 border-zinc-900 dark:border-zinc-100">
      <div
        className="italic text-2xl md:text-3xl text-zinc-800 dark:text-zinc-200 leading-relaxed"
        {...props}
      />
    </blockquote>
  ),

  code: ({ children, ...props }: Props) => {
    const codeHTML = highlight(children as string);
    return (
      <code
        className="font-mono text-[14px] bg-zinc-100 dark:bg-zinc-800/50 px-1.5 py-0.5 rounded transition-colors"
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        {...props}
      />
    );
  },

  span: (props: Props) => (
    <span
      className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-2 block"
      {...props}
    />
  ),

  a: ({ href, children, ...props }: ComponentPropsWithoutRef<"a">) => {
    const className =
      "font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 hover:decoration-zinc-900 dark:hover:decoration-zinc-100 transition-all";
    if (href?.startsWith("/"))
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },

  ul: (props: Props) => (
    <ul
      className="text-[17px] list-disc pl-6 mb-8 space-y-3 text-zinc-700 dark:text-zinc-300"
      {...props}
    />
  ),
  ol: (props: Props) => (
    <ol
      className="text-[17px] list-decimal pl-6 mb-8 space-y-3 text-zinc-700 dark:text-zinc-300"
      {...props}
    />
  ),
  li: (props: Props) => <li className="pl-2" {...props} />,

  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <div className="my-10 overflow-x-auto border-y border-zinc-100 dark:border-zinc-800">
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
        <tbody className="divide-y divide-zinc-50 dark:divide-zinc-900">
          {data.rows.map((row, i) => (
            <tr
              key={i}
              className="hover:bg-zinc-50/50 dark:hover:bg-zinc-900/50 transition-colors"
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

export function useMDXComponents(): typeof components {
  return components;
}
