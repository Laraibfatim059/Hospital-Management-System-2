import { cn } from '@/utils/cn';

/**
 * Styling mappings for Badge component variants with dark mode support.
 */
const variantClasses = {
  default: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:border dark:border-slate-700',
  success: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border dark:border-emerald-800/40',
  warning: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 dark:border dark:border-amber-800/40',
  danger: 'bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300 dark:border dark:border-red-800/40',
  info: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-300 dark:border dark:border-cyan-800/40',
};

/**
 * Sizing mappings for Badge component.
 */
const sizeClasses = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-0.5',
};

/**
 * Reusable Badge status and tag component.
 */
function Badge({
  variant = 'default',
  size = 'md',
  children,
  className,
  ...rest
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        variantClasses[variant] || variantClasses.default,
        sizeClasses[size] || sizeClasses.md,
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}

export { Badge };
export default Badge;
