import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof Link>, "to" | "className"> & {
  children?: React.ReactNode;
  variant?: "solid" | "ghost";
  to?: ComponentProps<typeof Link>["to"];
  className?: string;
};

export function PrimaryCTA({
  children = "Schedule the Operator's Audit",
  variant = "solid",
  to = "/contact",
  className = "",
  ...rest
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-medium tracking-tight transition-colors";
  const styles =
    variant === "solid"
      ? "bg-ink text-paper ring-1 ring-ink hover:bg-tobacco hover:ring-tobacco"
      : "text-ink/70 hover:text-ink";
  return (
    <Link to={to} {...rest} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
