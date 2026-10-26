import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { ChapterContent } from '@/data/content';

interface ChapterSectionProps {
  section: ChapterContent;
  index: number;
}

export function ChapterSection({ section, index }: ChapterSectionProps) {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="mb-9 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
      <h3 className="mb-4 font-display text-2xl font-semibold leading-relaxed text-green md:text-3xl">{section.heading}</h3>
      {section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex} className="mb-4 font-body text-base leading-loose text-charcoal/80 md:text-lg">{paragraph}</p>)}
      {section.expandable?.map((item, itemIndex) => (
        <div key={item.title} className="my-4 overflow-hidden rounded-2xl border border-gold/30 bg-white/60">
          <button onClick={() => setExpanded(expanded === itemIndex ? null : itemIndex)} aria-expanded={expanded === itemIndex} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right transition hover:bg-gold/10">
            <span className="font-display text-lg font-semibold text-green">{item.title}</span>
            <ChevronDown className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${expanded === itemIndex ? 'rotate-180' : ''}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-500 ${expanded === itemIndex ? 'max-h-[800px]' : 'max-h-0'}`}>
            <ul className="space-y-3 px-5 pb-5">
              {item.items.map((text) => <li key={text} className="flex items-start gap-3 font-body text-sm leading-relaxed text-charcoal/75 md:text-base"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rose" /> <span>{text}</span></li>)}
            </ul>
          </div>
        </div>
      ))}
      {section.keyTakeaways && (
        <div className="mt-6 rounded-2xl border-r-4 border-gold bg-gold/10 px-5 py-4">
          <h4 className="mb-3 font-display text-lg font-semibold text-green">خلاصة هذه الخطوة</h4>
          <ul className="space-y-2">{section.keyTakeaways.map((point) => <li key={point} className="flex items-start gap-3 font-body text-sm leading-relaxed text-charcoal/80 md:text-base"><span className="font-bold text-rose">◆</span><span>{point}</span></li>)}</ul>
        </div>
      )}
    </div>
  );
}
