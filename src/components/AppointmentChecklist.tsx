import { useState, useEffect } from 'react';
import { Check, Printer, ClipboardList } from 'lucide-react';
import { appointmentChecklistItems } from '@/data/content';

const STORAGE_KEY = 'journey_appointment_checklist';

export function AppointmentChecklist() {
  const [checked, setChecked] = useState<boolean[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setChecked(JSON.parse(saved));
      } else {
        setChecked(new Array(appointmentChecklistItems.length).fill(false));
      }
    } catch {
      setChecked(new Array(appointmentChecklistItems.length).fill(false));
    }
  }, []);

  const toggle = (index: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore storage errors
      }
      return next;
    });
  };

  const completedCount = checked.filter(Boolean).length;

  return (
    <div className="bg-gradient-to-br from-sage/10 to-blush/10 rounded-2xl p-6 md:p-8 animate-fade-in">
      <div className="flex items-center gap-3 mb-2">
        <ClipboardList className="w-6 h-6 text-dusty-rose" />
        <h3 className="text-xl md:text-2xl font-serif text-burgundy">
          Appointment Preparation Checklist
        </h3>
      </div>
      <p className="text-sm font-sans text-warm-gray mb-4">
        Optional — use this to prepare for a medical appointment. Your progress is saved on this device only.
      </p>

      <div className="mb-4">
        <div className="flex justify-between text-xs font-sans text-warm-gray mb-1.5">
          <span>{completedCount} of {appointmentChecklistItems.length} completed</span>
          <span>{Math.round((completedCount / appointmentChecklistItems.length) * 100)}%</span>
        </div>
        <div className="h-1.5 bg-blush/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-sage rounded-full transition-all duration-500"
            style={{ width: `${(completedCount / appointmentChecklistItems.length) * 100}%` }}
          />
        </div>
      </div>

      <ul className="space-y-2">
        {appointmentChecklistItems.map((item, i) => (
          <li key={i}>
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-start gap-3 p-3 rounded-lg text-left hover:bg-ivory/60 transition-colors duration-200"
            >
              <span
                className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  checked[i]
                    ? 'bg-sage border-sage'
                    : 'border-blush bg-ivory'
                }`}
              >
                {checked[i] && <Check className="w-4 h-4 text-white" />}
              </span>
              <span
                className={`text-sm md:text-base font-sans leading-relaxed pt-0.5 transition-all duration-200 ${
                  checked[i] ? 'text-warm-gray line-through' : 'text-deep-burgundy/80'
                }`}
              >
                {item}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => window.print()}
        className="no-print mt-5 inline-flex items-center gap-2 text-sm font-sans text-dusty-rose hover:text-burgundy transition-colors duration-300"
      >
        <Printer className="w-4 h-4" />
        Print checklist
      </button>
    </div>
  );
}
