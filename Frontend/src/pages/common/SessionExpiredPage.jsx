import { useNavigate } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { useAuthStore } from '@/store/useAuthStore';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export function SessionExpiredPage() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleReturnToLogin = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#080A0F] text-slate-100 p-4 relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl"
        aria-hidden="true"
      />

      <Card className="max-w-md w-full border border-slate-800 shadow-2xl bg-[#151A24]">
        <Card.Body className="p-8 text-center space-y-6">
          <div className="mx-auto w-16 h-16 bg-amber-950/60 border border-amber-800/50 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-900/20">
            <Clock className="w-8 h-8 text-amber-400" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Session Expired
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your authentication session has expired due to inactivity or invalid credentials. Please sign in again to continue.
            </p>
          </div>

          <Button
            onClick={handleReturnToLogin}
            variant="primary"
            className="w-full h-11"
          >
            Return to Login
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SessionExpiredPage;
