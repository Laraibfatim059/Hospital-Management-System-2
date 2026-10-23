import { forwardRef, useId } from 'react';
import { cn } from '@/utils/cn';

/**
 * Reusable multi-line Textarea component supporting labels, customizable rows, and error states.
 */
const Textarea = forwardRef(
  (
    {
      label,
      error,
      className,
      rows = 4,
      id,
      disabled,
      ...rest
    },
    ref
  ) => {
    const generatedId = useId();
    const textareaId = id || (rest.name ? `textarea-${rest.name}` : generatedId);

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          disabled={disabled}
          className={cn(
            'w-full p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0B0E14] text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent disabled:bg-slate-100 dark:disabled:bg-slate-800/40 disabled:cursor-not-allowed transition-colors resize-y',
            error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
            className
          )}
          {...rest}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };
export default Textarea;
