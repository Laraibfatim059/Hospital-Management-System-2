import { forwardRef, useId } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';

/**
 * Reusable Select dropdown component supporting labels, options array or children, and error states.
 */
const Select = forwardRef(
  (
    {
      label,
      error,
      options = [],
      placeholder,
      className,
      id,
      disabled,
      children,
      ...rest
    },
    ref
  ) => {
    const generatedId = useId();
    const selectId = id || (rest.name ? `select-${rest.name}` : generatedId);

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            className={cn(
              'w-full h-10 pl-3 pr-10 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0B0E14] text-sm text-slate-900 dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent disabled:bg-slate-100 dark:disabled:bg-slate-800/40 disabled:cursor-not-allowed transition-colors cursor-pointer',
              error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
              className
            )}
            {...rest}
          >
            {placeholder && (
              <option value="" className="bg-white dark:bg-[#151A24] text-slate-500">
                {placeholder}
              </option>
            )}
            {options.map((option) => {
              const value = typeof option === 'object' && option !== null ? option.value : option;
              const labelText = typeof option === 'object' && option !== null ? option.label : option;
              return (
                <option key={String(value)} value={value} className="bg-white dark:bg-[#151A24] text-slate-900 dark:text-slate-100">
                  {labelText}
                </option>
              );
            })}
            {children}
          </select>
          <ChevronDown className="h-4 w-4 text-slate-400 dark:text-slate-500 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
        </div>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';

export { Select };
export default Select;
