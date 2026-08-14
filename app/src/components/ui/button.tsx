import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  href?: string;
}

export function Button({
  className,
  variant = "default",
  size = "default",
  href,
  type,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 disabled:pointer-events-none disabled:opacity-50",
    variant === "default" && "bg-slate-900 text-white hover:bg-slate-800",
    variant === "secondary" && "bg-stone-100 text-slate-900 hover:bg-stone-200",
    variant === "outline" && "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
    variant === "ghost" && "bg-transparent text-slate-900 hover:bg-slate-100",
    size === "default" && "h-11 px-4 text-sm",
    size === "sm" && "h-9 px-3 text-xs",
    size === "lg" && "h-12 px-5 text-base",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type ?? "button"}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}
