import { cn } from '@/utils/cn';

/**
 * Variant styles for the Card component.
 */
const variantClasses = {
  default: 'border border-slate-200 dark:border-slate-800/80 shadow-xs dark:shadow-black/40',
  bordered: 'border-2 border-slate-200 dark:border-slate-700/80 shadow-xs dark:shadow-black/40',
  elevated: 'border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-lg dark:shadow-black/60',
};

/**
 * Card Header subcomponent supporting title, description, and optional right-aligned action children.
 */
function CardHeader({ title, description, children, className, ...rest }) {
  return (
    <div
      className={cn('px-6 py-4 border-b border-slate-200 dark:border-slate-800/80', className)}
      {...rest}
    >
      {title || description ? (
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1">
            {title && (
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white leading-tight">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
            )}
          </div>
          {children && <div>{children}</div>}
        </div>
      ) : (
        children
      )}
    </div>
  );
}

/**
 * Card Body subcomponent providing consistent padding for card content.
 */
function CardBody({ children, className, ...rest }) {
  return (
    <div className={cn('px-6 py-4', className)} {...rest}>
      {children}
    </div>
  );
}

/**
 * Card Footer subcomponent with top border and subtle background fill.
 */
function CardFooter({ children, className, ...rest }) {
  return (
    <div
      className={cn('px-6 py-4 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/40', className)}
      {...rest}
    >
      {children}
    </div>
  );
}

/**
 * Main Card container component supporting default, bordered, and elevated variants.
 * Default dark card background: #151A24 with subtle border #1E293B.
 */
function Card({
  variant = 'default',
  children,
  className,
  ...rest
}) {
  return (
    <div
      className={cn(
        'rounded-xl bg-white dark:bg-[#151A24] text-slate-900 dark:text-slate-100 overflow-hidden transition-all',
        variantClasses[variant] || variantClasses.default,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export { Card, CardHeader, CardBody, CardFooter };
export default Card;
