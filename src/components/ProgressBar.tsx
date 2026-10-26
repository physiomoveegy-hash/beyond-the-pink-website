interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.min((current / total) * 100, 100);
  return (
    <div className="w-full" aria-label={`التقدم: ${Math.round(percentage)} بالمئة`}>
      <div className="mb-2 flex items-center justify-between font-body text-sm text-charcoal/60"><span>الخطوة {current} من {total}</span><span className="text-gold">{Math.round(percentage)}٪</span></div>
      <div className="h-2 overflow-hidden rounded-full bg-gold/20"><div className="h-full rounded-full bg-gradient-to-l from-gold to-green transition-all duration-700" style={{ width: `${percentage}%` }} /></div>
    </div>
  );
}
