import type { ReactNode } from "react";

interface CodeBlockProps {
  children: ReactNode;
  className?: string;
}

export function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-lg border-8 border-black bg-muted">
      <div className="overflow-x-auto">
        <pre
          className={`p-4 text-sm leading-relaxed mb-0 mt-0 ${className || ""}`}
          {...props}
        >
          <code className="block min-w-0 break-words whitespace-pre-wrap sm:whitespace-pre">
            {children}
          </code>
        </pre>
      </div>
    </div>
  );
}

export function InlineCode({ children, className, ...props }: CodeBlockProps) {
  return (
    <code
      className={`rounded bg-muted px-1.5 py-0.5 text-sm font-mono ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </code>
  );
}

export const mdxComponents = {
  pre: ({ children, ...props }: any) => {
    const codeElement = children?.props?.children;
    const className = children?.props?.className || "";

    return (
      <CodeBlock className={className} {...props}>
        {codeElement}
      </CodeBlock>
    );
  },
  code: ({ children, className, ...props }: any) => {
    if (!className || !className.includes("language-")) {
      return <InlineCode {...props}>{children}</InlineCode>;
    }

    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};
