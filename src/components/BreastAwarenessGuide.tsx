import { CircleAlert, Eye, Stethoscope } from 'lucide-react';

const guidance = [
  {
    icon: Eye,
    title: 'Observe your usual',
    text: 'Notice the usual look and feel of your breasts without following a rigid schedule.',
  },
  {
    icon: CircleAlert,
    title: 'Notice what is new',
    text: 'Pay attention to changes in appearance, skin, nipple position, or the underarm area.',
  },
  {
    icon: Stethoscope,
    title: 'Ask a professional',
    text: 'A new or persistent change deserves assessment by a qualified healthcare professional.',
  },
];

export function BreastAwarenessGuide() {
  return (
    <section className="my-10 rounded-[1.75rem] border border-blush/50 bg-gradient-to-br from-blush/15 via-ivory to-sage/10 p-5 md:p-7" aria-labelledby="breast-awareness-guide-title">
      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-7 items-center">
        <div className="rounded-2xl border border-blush/40 bg-ivory/80 p-4 shadow-sm">
          <svg viewBox="0 0 300 190" role="img" aria-labelledby="awareness-diagram-title awareness-diagram-description" className="w-full h-auto">
            <title id="awareness-diagram-title">Breast awareness areas to notice</title>
            <desc id="awareness-diagram-description">A simple front-view outline highlighting the breast skin, nipple area, and underarm areas for awareness.</desc>
            <path d="M103 36c9-13 24-20 47-20s38 7 47 20l27 30c12 13 19 29 19 46v12H57V112c0-17 7-33 19-46l27-30Z" fill="#f9e4e1" stroke="#7e3546" strokeWidth="2" />
            <path d="M103 36c-13 8-24 17-33 29M197 36c13 8 24 17 33 29" fill="none" stroke="#7e3546" strokeWidth="2" strokeLinecap="round" />
            <path d="M112 78c10-15 28-19 38-3 10-16 28-12 38 3 7 11 5 26-4 36-12 13-28 17-34 17s-22-4-34-17c-9-10-11-25-4-36Z" fill="#efb8bd" stroke="#9b5566" strokeWidth="2" />
            <circle cx="143" cy="98" r="4" fill="#7e3546" />
            <circle cx="157" cy="98" r="4" fill="#7e3546" />
            <circle cx="84" cy="93" r="9" fill="#d6e0d2" stroke="#6f806d" strokeWidth="2" />
            <circle cx="216" cy="93" r="9" fill="#d6e0d2" stroke="#6f806d" strokeWidth="2" />
            <path d="M143 16v-8M157 16v-8" stroke="#7e3546" strokeWidth="2" strokeLinecap="round" />
            <text x="18" y="145" fill="#7e3546" fontSize="11" fontFamily="sans-serif">Underarm area</text>
            <path d="M77 125 58 140" stroke="#7e3546" strokeWidth="1.5" />
            <text x="186" y="145" fill="#7e3546" fontSize="11" fontFamily="sans-serif">Breast skin</text>
            <path d="M186 125 202 140" stroke="#7e3546" strokeWidth="1.5" />
            <text x="112" y="176" fill="#7e3546" fontSize="11" fontFamily="sans-serif">Nipple area</text>
            <path d="M150 119v45" stroke="#7e3546" strokeWidth="1.5" />
          </svg>
        </div>

        <div>
          <p className="text-xs font-sans uppercase tracking-[0.2em] text-dusty-rose mb-2">A gentle visual guide</p>
          <h2 id="breast-awareness-guide-title" className="text-2xl md:text-3xl font-serif text-burgundy mb-3">What breast awareness includes</h2>
          <p className="text-sm md:text-base font-sans text-deep-burgundy/75 leading-relaxed mb-5">
            This is not a self-examination checklist or a substitute for screening. It is simply a reminder of the areas and changes worth discussing if something feels new or unusual for you.
          </p>
          <div className="space-y-3">
            {guidance.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-full bg-blush/50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-burgundy" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-base text-burgundy">{title}</h3>
                  <p className="text-sm font-sans text-deep-burgundy/70 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
