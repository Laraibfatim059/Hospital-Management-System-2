import { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils/cn';

/**
 * Reusable Button component supporting multiple variants, sizes, icon slots, and loading state.
 * Highlight accents: Cyan (#00D4FF) primary with high-contrast text, subtle purple variant.
 */
const variantClasses = {
  primary: 'bg-gradient-to-r from-[#00D4FF] to-[#00A3C4] hover:from-[#38E1FF] hover:to-[#00D4FF] text-slate-950 font-semibold shadow-xs shadow-cyan-500/20 active:scale-[0.98]',
  secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-100',
  outline: 'border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-200',
  ghost: 'hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300',
  danger: 'bg-red-600 hover:bg-red-700 text-white shadow-xs shadow-red-500/20',
  purple: 'bg-gradient-to-r from-[#7C5CFC] to-[#633BFB] hover:from-[#9B82FD] hover:to-[#7C5CFC] text-white font-semibold shadow-xs shadow-purple-500/25 active:scale-[0.98]',
};

const sizeClasses = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
};

const iconSizes = {
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
};

const Button = forwardRef(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled = false,
      leftIcon = null,
      rightIcon = null,
      children,
      className,
      type = 'button',
      ...rest
    },
    ref
  ) => {
    const isButtonDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isButtonDisabled}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none',
          variantClasses[variant] || variantClasses.primary,
          sizeClasses[size] || sizeClasses.md,
          className
        )}
        {...rest}
      >
        {isLoading ? (
          <Loader2 className={cn('animate-spin', iconSizes[size] || iconSizes.md)} />
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export default Button;
