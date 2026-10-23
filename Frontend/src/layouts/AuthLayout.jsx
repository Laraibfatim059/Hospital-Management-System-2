import { Outlet } from 'react-router-dom';
import { HeartPulse } from 'lucide-react';
import { cn } from '@/utils/cn';

/**
 * Authentication layout component used for authentication pages (Login, Forgot Password, etc.).
 * Centers an authentication card featuring hospital branding, ambient cyan/purple glow,
 * subtle 3D floating animation, and an Outlet for form routes.
 */
export function AuthLayout({ className }) {
  return (
    <div
      className={cn(
        'min-h-screen bg-[#080A0F] text-slate-100 flex flex-col items-center justify-center p-4 relative overflow-hidden',
        className
      )}
    >
      {/* Subtle Ambient Glow Elements */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#00D4FF]/10 blur-3xl animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#7C5CFC]/15 blur-3xl animate-pulse-glow"
        style={{ animationDelay: '2s' }}
        aria-hidden="true"
      />

      {/* Centered Auth Card with #151A24 background and subtle cyan/purple border */}
      <div className="relative z-10 w-full max-w-md bg-[#151A24] rounded-2xl shadow-2xl border border-slate-800 p-8 sm:p-10 transition-all card-shadow">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="animate-float-3d h-16 w-16 rounded-2xl bg-gradient-to-tr from-[#00D4FF] to-[#7C5CFC] text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-500/25 mb-4 ring-4 ring-[#00D4FF]/20">
            <HeartPulse className="h-8 w-8 text-slate-950" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Hospital Management System
          </h1>
          <p className="text-sm text-slate-400 mt-1.5">
            Healthcare Management & Patient Portal
          </p>
        </div>

        {/* Content: Form routes via Outlet */}
        <div className="w-full">
          <Outlet />
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500">
            Secure Healthcare Infrastructure • HMS v1.0
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
