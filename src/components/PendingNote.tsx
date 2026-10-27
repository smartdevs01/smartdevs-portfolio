import { AlertTriangle } from 'lucide-react';

export default function PendingNote({ label = 'To be added' }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-gold-400/50 bg-gold-400/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-gold-300">
      <AlertTriangle size={11} />
      {label}
    </span>
  );
}
