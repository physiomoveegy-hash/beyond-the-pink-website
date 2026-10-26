import { Facebook, Instagram, MapPin, MessageCircle, Phone, Music2 } from 'lucide-react';

const links = [
  { label: 'واتساب', href: 'https://wa.me/201034407000', icon: MessageCircle },
  { label: 'إنستجرام', href: 'https://www.instagram.com/physiomove.eg?mdxt=MWV2cTM0NnQyNWhkeQ==', icon: Instagram },
  { label: 'فيسبوك', href: 'https://www.facebook.com/share/19igKsx4CH/?mibextid=wwXIfr', icon: Facebook },
  { label: 'تيك توك', href: 'https://www.tiktok.com/@physiomove.eg?_r=1&_t=ZS-9AsRf9TQxtZ', icon: Music2 },
];

export function ContactSection({ compact = false }: { compact?: boolean }) {
  return (
    <section id="contact" className={`border-t border-gold/20 bg-green text-white ${compact ? 'py-10' : 'py-16 md:py-20'}`}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="mb-2 font-body text-sm text-gold">PhysioMove Clinic</p><h2 className="font-display text-3xl font-semibold md:text-4xl">خدي خطوتك التالية بدعم مناسب</h2><p className="mt-3 max-w-xl font-body leading-loose text-white/75">للاستفسار عن خدمات التأهيل، تواصلي مع العيادة مباشرة. اختيار الخدمة يبدأ دائمًا بالتقييم المناسب.</p></div>
          <a href="https://wa.me/201034407000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-body font-semibold text-green transition hover:bg-white"><MessageCircle className="h-5 w-5" /> تواصلي عبر واتساب</a>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 border-t border-white/15 pt-6">
          <a href="tel:+201034407000" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 font-body text-sm transition hover:border-gold hover:text-gold"><Phone className="h-4 w-4" /> 0103 440 7000</a>
          <a href="https://maps.app.goo.gl/35eu42CEi1rifiH5A?g_st=ic" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 font-body text-sm transition hover:border-gold hover:text-gold"><MapPin className="h-4 w-4" /> موقعنا على الخريطة</a>
          {links.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 font-body text-sm transition hover:border-gold hover:text-gold"><Icon className="h-4 w-4" /> {label}</a>)}
        </div>
      </div>
    </section>
  );
}
