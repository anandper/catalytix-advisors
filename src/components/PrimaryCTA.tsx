import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof Link>, "to" | "className"> & {
  children?: React.ReactNode;
  variant?: "solid" | "ghost";
  to?: ComponentProps<typeof Link>["to"];
  className?: string;
};

export function PrimaryCTA({
  children = "Book a consultation",
  variant = "solid",
  to = "/contact",
  className = "",
  ...rest
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium tracking-tight transition-colors";
  const styles =
    variant === "solid"
      ? "bg-tobacco text-paper hover:bg-tobacco/90"
      : "text-ink/80 hover:text-tobacco";
  return (
    <Link to={to} {...rest} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
