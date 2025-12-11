import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "danger" | "info" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-indigo-50/80 text-indigo-600 border-indigo-200/60 dark:bg-indigo-900/50 dark:text-indigo-300 dark:border-indigo-700",
    success: "bg-emerald-50/80 text-emerald-600 border-emerald-200/60 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700",
    warning: "bg-amber-50/80 text-amber-600 border-amber-200/60 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-700",
    danger: "bg-red-50/80 text-red-600 border-red-200/60 dark:bg-red-900/50 dark:text-red-300 dark:border-red-700",
    info: "bg-sky-50/80 text-sky-600 border-sky-200/60 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-700",
    outline: "bg-white/60 border-slate-300/60 text-slate-600 dark:bg-transparent dark:border-gray-600 dark:text-gray-300",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-xs",
    lg: "px-3 py-1.5 text-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border font-medium transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  );
}
