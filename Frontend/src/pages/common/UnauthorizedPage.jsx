import { useNavigate } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useAuthStore } from '@/store/useAuthStore';
import { getDefaultPath } from '@/routes/roleRoutes';

/**
 * 403 Unauthorized error page displayed when authenticated user attempts
 * to access a route for which they do not have sufficient role permissions.
 */
export function UnauthorizedPage() {
  const navigate = useNavigate();
  const role = useAuthStore((state) => state.role);

  const handleGoToDashboard = () => {
    const defaultPath = getDefaultPath(role);
    navigate(defaultPath);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#080A0F] text-slate-100 px-4 py-12 relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-80 h-80 rounded-full bg-red-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-md w-full text-center space-y-6 relative z-10 p-8 sm:p-10 bg-[#151A24] border border-slate-800 rounded-2xl shadow-2xl card-shadow">
        <div className="flex justify-center">
          <div className="h-20 w-20 rounded-2xl bg-red-950/60 border border-red-800/50 flex items-center justify-center text-red-400 shadow-lg shadow-red-900/20">
            <ShieldAlert className="h-10 w-10" />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Access Denied
          </h1>
          <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
            You do not have the required permissions or clearance level to view this hospital portal section.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 pt-2">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            leftIcon={<ArrowLeft className="h-4 w-4" />}
          >
            Go Back
          </Button>

          <Button
            variant="primary"
            onClick={handleGoToDashboard}
            leftIcon={<LayoutDashboard className="h-4 w-4 text-slate-950" />}
          >
            Go to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UnauthorizedPage;
