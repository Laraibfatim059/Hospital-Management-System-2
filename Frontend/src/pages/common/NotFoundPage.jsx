import { useNavigate } from 'react-router-dom';
import { HeartPulse, ArrowLeft, Home, Compass } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useAuthStore } from '@/store/useAuthStore';

/**
 * 404 Not Found error page displayed when a user visits an unrecognized route.
 * Features the signature HMS dark visual theme (#080A0F, #151A24, cyan/purple glow),
 * 3D medical animations, a working intelligent Home button, and quick recovery navigation.
 */
export function NotFoundPage() {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const role = useAuthStore((state) => state.role || state.user?.role);

  const handleGoHome = () => {
    if (isAuthenticated && role) {
      const homePath = `/${role === 'lab_technician' ? 'lab' : role}`;
      navigate(homePath);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#080A0F] text-slate-100 px-4 py-12 relative overflow-hidden">
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#00D4FF]/10 blur-3xl animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-[#7C5CFC]/15 blur-3xl animate-pulse-glow"
        style={{ animationDelay: '2s' }}
        aria-hidden="true"
      />

      <div className="max-w-lg w-full text-center space-y-8 relative z-10 p-8 sm:p-10 bg-[#151A24] border border-slate-800 rounded-2xl shadow-2xl card-shadow">
        {/* 3D Medical 404 Graphic */}
        <div className="flex justify-center">
          <div className="relative">
            <span className="text-8xl sm:text-9xl font-black text-slate-800/60 select-none tracking-widest block font-mono">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-float-3d h-20 w-20 rounded-2xl bg-gradient-to-tr from-[#00D4FF] to-[#7C5CFC] shadow-xl shadow-cyan-500/25 flex items-center justify-center text-slate-950 ring-4 ring-[#00D4FF]/20">
                <HeartPulse className="h-10 w-10 text-slate-950" />
              </div>
            </div>
          </div>
        </div>

        {/* Messaging */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 text-[#00D4FF] border border-cyan-800/40">
            <Compass className="w-3.5 h-3.5" />
            Route Not Found
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
            The hospital page or record you requested does not exist or may have been relocated.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() => navigate(-1)}
            leftIcon={<ArrowLeft className="h-4 w-4" />}
          >
            Go Back
          </Button>

          <Button
            variant="primary"
            className="w-full sm:w-auto"
            onClick={handleGoHome}
            leftIcon={<Home className="h-4 w-4 text-slate-950" />}
          >
            {isAuthenticated ? 'Return to Dashboard' : 'Go to Login'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
