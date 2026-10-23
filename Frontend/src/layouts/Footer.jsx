import { cn } from '@/utils/cn';

/**
 * Footer component for authenticated layout views.
 * Displays application copyright and version information.
 */
export function Footer({ className }) {
  return (
    <footer
      className={cn(
        'bg-[#080A0F] border-t border-slate-800 px-6 py-3 shrink-0',
        className
      )}
    >
      <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
        <span>© 2026 Hospital Management System. All rights reserved.</span>
        <span>Version 1.0.0</span>
      </div>
    </footer>
  );
}

export default Footer;
