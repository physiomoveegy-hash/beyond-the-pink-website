import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, ExternalLink, HeartPulse, Home, Play, RotateCcw } from 'lucide-react';
import { ChapterSection } from '@/components/ChapterSection';
import { ContactSection } from '@/components/ContactSection';
import { EditorialImage } from '@/components/EditorialImage';
import { MusicPlayer, type MusicPlayerHandle } from '@/components/MusicPlayer';
import { ProgressBar } from '@/components/ProgressBar';
import { Quiz } from '@/components/Quiz';
import { chapters, pathways, awarenessQuiz, rehabilitationQuiz, type Chapter, type Pathway } from '@/data/content';

type Screen = 'home' | 'journeys' | 'chapter' | 'completion';
type PathId = 'A' | 'B';

const LOGO_PINK = '/assets/beyond-the-pink-logo.jpeg.PNG';
const LOGO_PHYSIO = '/assets/physiomove-logo.jpeg.PNG';
const HERO_IMAGE = '/assets/dr-dahlia-hero.jpeg.PNG';
const HERO_BACKGROUND = '/wide_clean_minimal_interior_portrait_scene_with.png.jpg';
const RECOVERY_COVER = '/assets/dr-dalia-sitting-clinic.jpeg.PNG';
const VIDEO_COVER = '/assets/_dr-dalia-video-cover.png_.PNG';
const VIDEO_URL = 'https://drive.google.com/file/d/14MTdOZQ0Wq0Kh9ZKdBzb71pRftk2Inv0/view?usp=drivesdk';
const DISCLAIMER = 'هذا المحتوى تعليمي عام ولا يغني عن التقييم الطبي أو توصيات فريقك المعالج. عند ملاحظة تغيير جديد أو غير معتاد، اطلبي المشورة الطبية المناسبة ولا تؤجلي الرعاية.';
const PROGRESS_KEY = 'beyond_the_pink_completed_chapters';

const icons = { BookOpen, HeartPulse };

function scrollTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

function BrandBar({ onHome, onJourneys }: { onHome: () => void; onJourneys: () => void }) {
  return (
    <header className="sticky top-0 z-30 border-b border-gold/20 bg-bone/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <button onClick={onHome} aria-label="العودة إلى الصفحة الرئيسية" className="flex items-center gap-3">
          <img src={LOGO_PINK} alt="Beyond the Pink" className="h-11 w-auto object-contain" />
          <span className="hidden h-8 w-px bg-gold/50 sm:block" />
          <img src={LOGO_PHYSIO} alt="PhysioMove Clinic" className="hidden h-11 w-auto max-w-[130px] object-contain sm:block" />
        </button>
        <button onClick={onJourneys} className="inline-flex items-center gap-2 rounded-full border border-green/20 px-4 py-2 font-body text-sm font-medium text-green transition hover:border-gold hover:bg-gold/10">استكشفي الرحلتين <ArrowLeft className="h-4 w-4" /></button>
      </div>
    </header>
  );
}

function HomeScreen({ onBegin, onJourneys, onSelectPath }: { onBegin: () => void; onJourneys: () => void; onSelectPath: (id: PathId) => void }) {
  return (
    <div className="min-h-screen bg-bone animate-fade-in">
      <BrandBar onHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })} onJourneys={onJourneys} />
      <main>
        <section className="bg-bone md:min-h-[700px] md:bg-cover md:bg-center" style={{ backgroundImage: `url(${HERO_BACKGROUND})` }}>
          <div className="mx-auto flex max-w-7xl flex-col md:min-h-[700px] md:justify-center md:px-8">
            <div className="order-1 px-5 py-10 text-right md:order-none md:mr-auto md:w-[47%] md:px-0 md:py-16">
              <p className="mb-5 font-editorial text-base tracking-[0.12em] text-green animate-fade-in-up" style={{ animationDelay: '120ms' }}>BEYOND THE PINK × PHYSIOMOVE CLINIC</p>
              <h1 className="font-display text-4xl font-bold leading-[1.35] text-green animate-fade-in-up md:text-6xl" style={{ animationDelay: '260ms' }}>ما بعد الوردي…<br />رحلة رعاية لا تتوقف</h1>
              <p className="mt-6 max-w-xl font-body text-lg leading-loose text-charcoal/75 animate-fade-in-up md:text-xl" style={{ animationDelay: '400ms' }}>من الوعي والكشف المبكر إلى التأهيل واستعادة الحركة، هنرافقك في كل خطوة من رحلتك.</p>
              <div className="mt-7 animate-fade-in-up" style={{ animationDelay: '540ms' }}><p className="font-editorial text-xl tracking-[0.18em] text-gold">EVERY MOVE MATTERS.</p><p className="mt-3 font-body text-sm leading-loose text-green"><span dir="ltr" className="inline-block">Dr. Dahlia El Hosiney</span><br /><span dir="ltr" className="inline-block text-charcoal/65">Founder of PhysioMove<br />MSc in Orthopedic Physiotherapy</span></p></div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-end animate-fade-in-up" style={{ animationDelay: '680ms' }}>
                <button onClick={onBegin} className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-6 py-3.5 font-body font-semibold text-white transition hover:bg-gold hover:text-green"><Play className="h-4 w-4 fill-current" /> ابدئي رحلتك</button>
                <a href={VIDEO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-green/30 px-6 py-3.5 font-body text-sm text-green transition hover:border-gold hover:bg-gold/10">شاهدي الفيديو <ExternalLink className="h-4 w-4" /></a>
              </div>
              <div className="mt-7 flex flex-wrap items-center justify-end gap-x-5 gap-y-1 border-t border-green/15 pt-4 font-body text-xs text-green animate-fade-in-up" style={{ animationDelay: '820ms' }}><span className="font-editorial text-sm tracking-[0.12em]">HOTLINE</span><span dir="ltr" className="inline-block font-semibold">0103 440 7000</span><span dir="ltr">Dumyat Al Jadidah — Moria Mall</span><span dir="ltr">Ras El Bar</span></div>
            </div>
            <div className="order-2 h-[58vw] min-h-[330px] max-h-[520px] bg-cover bg-center md:hidden" style={{ backgroundImage: `url(${HERO_BACKGROUND})` }} aria-label="د. داليا داخل عيادة PhysioMove" role="img" />
          </div>
        </section>

        <section id="journeys" className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <div className="mb-8 max-w-2xl"><p className="mb-2 font-body text-sm font-medium text-rose">اختاري المسار الأقرب لكِ</p><h2 className="font-display text-3xl font-semibold text-green md:text-5xl">رحلتان.. وخطوتك تبدأ من هنا</h2><p className="mt-4 font-body leading-loose text-charcoal/70">استكشفي المعلومات التثقيفية وتقدمي بالسرعة التي تناسبك. يمكنك العودة بين الرحلتين في أي وقت.</p></div>
          <div className="grid gap-5 md:grid-cols-2">
            <JourneyCard path={pathways[0]} onSelect={() => onSelectPath('A')} image="/assets/breast-cancer-awareness-ribbon.jpg" />
            <JourneyCard path={pathways[1]} onSelect={() => onSelectPath('B')} image={RECOVERY_COVER} />
          </div>
        </section>

        <section className="bg-green/5 px-5 py-14 md:px-8 md:py-20"><div className="mx-auto max-w-4xl text-center"><p className="font-editorial text-xl tracking-[0.2em] text-gold">WE CARE. YOU MOVE.</p><h2 className="mt-4 font-display text-3xl font-semibold text-green md:text-4xl">المعرفة رعاية.. والحركة جزء من التعافي</h2><p className="mx-auto mt-4 max-w-2xl font-body leading-loose text-charcoal/70">مساحة تعليمية تذكّرك بأن الاهتمام بصحتك لا يتوقف عند خطوة واحدة.</p></div></section>
      </main>
      <ContactSection />
      <Footer />
    </div>
  );
}

function JourneyCard({ path, onSelect, image }: { path: Pathway; onSelect: () => void; image: string }) {
  const Icon = icons[path.icon];
  return (
    <button onClick={onSelect} className="group overflow-hidden rounded-[1.75rem] border border-green/10 bg-white text-right shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl">
      <div className="h-48 overflow-hidden"><EditorialImage src={image} alt={path.title} className="transition duration-700 group-hover:scale-105" /></div>
      <div className="p-6 md:p-8"><div className="mb-5 flex items-center justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-rose/15 text-green"><Icon className="h-6 w-6" /></span><span className="font-body text-xs text-charcoal/50">رحلة {path.id === 'A' ? '١' : '٢'}</span></div><h3 className="font-display text-2xl font-semibold text-green md:text-3xl">{path.title}</h3><p className="mt-2 font-body text-sm text-rose">{path.subtitle}</p><p className="mt-4 font-body leading-loose text-charcoal/70">{path.description}</p><span className="mt-6 inline-flex items-center gap-2 font-body font-semibold text-green transition group-hover:gap-3">ابدئي الاستكشاف <ArrowLeft className="h-4 w-4" /></span></div>
    </button>
  );
}

function JourneyScreen({ onHome, onSelect, completedChapters }: { onHome: () => void; onSelect: (id: PathId) => void; completedChapters: number[] }) {
  return (
    <div className="min-h-screen bg-bone animate-fade-in"><BrandBar onHome={onHome} onJourneys={() => undefined} /><main className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-16"><div className="mb-10 text-center"><p className="font-body text-sm font-medium text-rose">Beyond the Pink × PhysioMove Clinic</p><h1 className="mt-3 font-display text-4xl font-bold text-green md:text-6xl">اختاري رحلتك</h1><p className="mx-auto mt-4 max-w-2xl font-body leading-loose text-charcoal/70">رحلتان تعليميتان متصلتان تساعدانك على فهم صحة الثدي ودعم التعافي بعد الجراحة.</p></div><div className="grid gap-6 md:grid-cols-2">{pathways.map((path) => <JourneyOption key={path.id} path={path} onSelect={() => onSelect(path.id)} completed={path.chapterIds.filter((id) => completedChapters.includes(id)).length} />)}</div></main><ContactSection compact /></div>
  );
}

function JourneyOption({ path, onSelect, completed }: { path: Pathway; onSelect: () => void; completed: number }) {
  const Icon = icons[path.icon];
  return <button onClick={onSelect} className="group rounded-[1.75rem] border border-green/10 bg-white p-7 text-right shadow-sm transition duration-500 hover:border-gold hover:shadow-xl md:p-10"><div className="mb-8 flex items-center justify-between"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-green text-gold"><Icon className="h-7 w-7" /></span><span className="font-body text-sm text-charcoal/55">{completed} من {path.chapterIds.length} خطوات</span></div><h2 className="font-display text-3xl font-semibold text-green">{path.title}</h2><p className="mt-2 font-body text-rose">{path.subtitle}</p><p className="mt-5 font-body leading-loose text-charcoal/70">{path.description}</p><span className="mt-8 inline-flex items-center gap-2 rounded-full bg-green px-5 py-3 font-body text-sm text-white transition group-hover:bg-gold group-hover:text-green">ابدئي الرحلة <ArrowLeft className="h-4 w-4" /></span></button>;
}

function ChapterScreen({ chapter, pathway, chapterIndex, onPrev, onNext, onReturn, onSelectPath, activePathId }: { chapter: Chapter; pathway: Pathway; chapterIndex: number; onPrev: () => void; onNext: () => void; onReturn: () => void; onSelectPath: (id: PathId) => void; activePathId: PathId }) {
  const isLast = chapterIndex + 1 === pathway.chapterIds.length;
  const quiz = pathway.id === 'A' ? awarenessQuiz : rehabilitationQuiz;
  return (
    <div className="min-h-screen bg-bone animate-fade-in" key={chapter.id}>
      <BrandBar onHome={onReturn} onJourneys={onReturn} />
      <main className="mx-auto max-w-4xl px-5 py-8 md:px-8 md:py-14">
        <div className="mb-10"><button onClick={onReturn} className="mb-6 inline-flex items-center gap-2 font-body text-sm text-green transition hover:text-gold"><ArrowRight className="h-4 w-4" /> العودة إلى الرحلتين</button><div className="mb-6 flex items-center justify-between gap-4"><span className="font-body text-sm text-rose">{pathway.title}</span><span className="font-body text-xs text-charcoal/55">الخطوة {chapterIndex + 1}</span></div><ProgressBar current={chapterIndex + 1} total={pathway.chapterIds.length} /></div>
        <div className="mb-10 text-center"><span className="font-body text-sm font-medium text-gold">الخطوة {chapterIndex + 1}</span><h1 className="mt-3 font-display text-4xl font-bold leading-tight text-green md:text-6xl">{chapter.title}</h1><p className="mx-auto mt-5 max-w-2xl font-body text-lg leading-loose text-charcoal/70">{chapter.intro}</p></div>
        {chapter.id === 3 && <AwarenessImage />}
        {chapter.id === 9 && <div className="mb-10 overflow-hidden rounded-[1.75rem] border border-gold/20 bg-white shadow-lg"><EditorialImage src={HERO_IMAGE} alt="د. داليا داخل عيادة PhysioMove" className="h-72 md:h-96" /></div>}
        <div className="border-t border-gold/20 pt-9">{chapter.content.map((section, index) => <ChapterSection key={section.heading} section={section} index={index} />)}</div>
        {chapter.id === 4 && <OfficialResources />}
        {chapter.id === 10 && <VideoCard />}
        {isLast && <div className="mt-10 border-t border-gold/20 pt-10"><div className="mb-6 text-center"><h2 className="font-display text-3xl font-semibold text-green">اختبري معلوماتك</h2><p className="mt-2 font-body text-charcoal/65">اختبار تعليمي قصير، وليس أداة تشخيصية.</p></div><Quiz questions={quiz} /></div>}
        <div className="mt-12 flex flex-col-reverse gap-3 border-t border-gold/20 pt-7 sm:flex-row sm:items-center sm:justify-between"><button onClick={onPrev} disabled={chapterIndex === 0} className="inline-flex items-center justify-center gap-2 rounded-full border border-green/20 px-5 py-3 font-body text-sm text-green transition hover:bg-green/5 disabled:cursor-not-allowed disabled:opacity-30"><ArrowRight className="h-4 w-4" /> السابقة</button><button onClick={onNext} className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 font-body text-sm font-semibold text-white transition hover:bg-gold hover:text-green">{isLast ? 'إكمال الرحلة' : 'الخطوة التالية'} <ArrowLeft className="h-4 w-4" /></button></div>
        <div className="mt-10 flex flex-wrap justify-center gap-3"><span className="w-full text-center font-body text-xs text-charcoal/50">استكشفي الرحلة الأخرى</span>{pathways.filter((path) => path.id !== activePathId).map((path) => <button key={path.id} onClick={() => onSelectPath(path.id)} className="rounded-full border border-gold/40 px-4 py-2 font-body text-sm text-green transition hover:bg-gold/10">{path.title}</button>)}</div>
      </main>
      <ContactSection compact /><DisclaimerBar />
    </div>
  );
}

function AwarenessImage() {
  return <div className="mb-10 overflow-hidden rounded-[1.75rem] border border-gold/20 bg-white shadow-lg"><img src="/assets/breast-cancer-awareness-ribbon.jpg" alt="شريط التوعية بصحة الثدي" className="h-64 w-full object-cover md:h-80" /></div>;
}

function OfficialResources() {
  const resources = [{ label: 'عن المبادرة', href: 'https://www.100millionseha.eg/women/about' }, { label: 'الأسئلة الشائعة', href: 'https://www.100millionseha.eg/women/question-answer' }, { label: 'البحث عن أماكن الخدمة', href: 'https://www.100millionseha.eg/women/search' }];
  return <section className="my-10 rounded-[1.75rem] bg-green p-6 text-white md:p-8"><h2 className="font-display text-2xl font-semibold">المبادرة الرئاسية لصحة المرأة</h2><p className="mt-3 font-body leading-loose text-white/75">اطلعي على المصادر الرسمية واستخدمي الخط الساخن المؤكد: <strong className="text-gold">15335</strong></p><div className="mt-6 flex flex-wrap gap-3">{resources.map((resource) => <a key={resource.href} href={resource.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 font-body text-sm transition hover:border-gold hover:text-gold">{resource.label}<ExternalLink className="h-4 w-4" /></a>)}</div></section>;
}

function VideoCard() {
  return <section className="my-10 overflow-hidden rounded-[1.75rem] border border-gold/20 bg-green shadow-lg"><div className="grid md:grid-cols-[1fr_1fr] md:items-center"><div className="h-64 md:h-full"><EditorialImage src={VIDEO_COVER} alt="غلاف فيديو عن التأهيل بعد جراحات الثدي" /></div><div className="p-6 text-white md:p-8"><p className="mb-2 font-editorial text-lg tracking-[0.16em] text-gold">EVERY MOVE MATTERS.</p><h2 className="font-display text-2xl font-semibold md:text-3xl">رحلتك ما بتنتهيش بانتهاء الجراحة</h2><p className="mt-3 font-body leading-loose text-white/75">شاهدي الفيديو لتتعرفي على دور التأهيل بعد جراحات الثدي.</p><a href={VIDEO_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 font-body font-semibold text-green transition hover:bg-white">شاهدي الفيديو كاملًا <ExternalLink className="h-4 w-4" /></a></div></div></section>;
}

function CompletionScreen({ pathway, onJourneys, onHome, onRestart }: { pathway: Pathway; onJourneys: () => void; onHome: () => void; onRestart: () => void }) {
  return <div className="min-h-screen bg-bone animate-fade-in"><BrandBar onHome={onHome} onJourneys={onJourneys} /><main className="mx-auto flex max-w-3xl flex-col items-center px-5 py-20 text-center md:px-8"><CheckCircle className="h-16 w-16 text-gold" /><p className="mt-6 font-body text-sm font-medium text-rose">أحسنتِ الوصول إلى هنا</p><h1 className="mt-3 font-display text-4xl font-bold text-green md:text-6xl">أكملتِ {pathway.title}</h1><p className="mt-5 font-body text-lg leading-loose text-charcoal/70">المعرفة خطوة من خطوات الاهتمام بنفسك. خدي وقتك، وارجعي للمعلومات كلما احتجتِ.</p><div className="mt-10 flex w-full flex-col gap-3 sm:w-auto"><button onClick={onJourneys} className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 font-body font-semibold text-white transition hover:bg-gold hover:text-green">العودة إلى الرحلتين <ArrowLeft className="h-4 w-4" /></button><button onClick={onRestart} className="inline-flex items-center justify-center gap-2 rounded-full border border-green/20 px-6 py-3 font-body text-sm text-green transition hover:bg-green/5"><RotateCcw className="h-4 w-4" /> إعادة هذه الرحلة</button><button onClick={onHome} className="inline-flex items-center justify-center gap-2 font-body text-sm text-charcoal/60 transition hover:text-green"><Home className="h-4 w-4" /> الصفحة الرئيسية</button></div>{pathway.id === 'B' && <p className="mt-10 font-body text-sm text-charcoal/60">يمكنك أيضًا <a href="https://wa.me/201034407000" target="_blank" rel="noopener noreferrer" className="font-semibold text-green underline">التواصل مع PhysioMove</a> أو <a href={VIDEO_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-green underline">مشاهدة الفيديو</a>.</p>}</main><ContactSection compact /><DisclaimerBar /></div>;
}

function DisclaimerBar() { return <footer className="border-t border-gold/20 bg-bone px-5 py-8 text-center"><p className="mx-auto max-w-3xl font-body text-xs leading-loose text-charcoal/55">{DISCLAIMER}</p></footer>; }

function Footer() { return <footer className="border-t border-white/10 bg-green px-5 py-10 text-white"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-right"><div className="flex items-center gap-4"><img src={LOGO_PINK} alt="Beyond the Pink" className="h-14 w-auto object-contain" /><img src={LOGO_PHYSIO} alt="PhysioMove Clinic" className="h-14 w-auto max-w-[140px] object-contain" /></div><div><p className="font-editorial tracking-[0.16em] text-gold">EVERY MOVE MATTERS.</p><p className="mt-2 font-body text-sm text-white/70">We Care. You Move.</p><a href="https://www.100millionseha.eg/women/about" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 font-body text-xs text-white/60 transition hover:text-gold">مبادرة صحة المرأة المصرية <ExternalLink className="h-3 w-3" /></a></div></div></footer>; }

function JourneyApp({ onMusicStart }: { onMusicStart: () => void }) {
  const [screen, setScreen] = useState<Screen>('home');
  const [activePathId, setActivePathId] = useState<PathId>('A');
  const [chapterIndex, setChapterIndex] = useState(0);
  const [completed, setCompleted] = useState<number[]>([]);
  useEffect(() => { try { const saved = localStorage.getItem(PROGRESS_KEY); if (saved) setCompleted(JSON.parse(saved) as number[]); } catch { setCompleted([]); } }, []);
  const save = (ids: number[]) => { setCompleted(ids); try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(ids)); } catch { /* local progress is optional */ } };
  const activePath = pathways.find((path) => path.id === activePathId) ?? pathways[0];
  const activeChapter = chapters[activePath.chapterIds[chapterIndex]];
  const goJourneys = () => { setScreen('journeys'); scrollTop(); };
  const goHome = () => { setScreen('home'); scrollTop(); };
  const selectPath = (id: PathId) => { setActivePathId(id); setChapterIndex(0); setScreen('chapter'); scrollTop(); };
  const next = () => { const ids = [...new Set([...completed, activeChapter.id])]; save(ids); if (chapterIndex + 1 < activePath.chapterIds.length) { setChapterIndex((value) => value + 1); scrollTop(); } else { setScreen('completion'); scrollTop(); } };
  const prev = () => { if (chapterIndex > 0) { setChapterIndex((value) => value - 1); scrollTop(); } };
  const restart = () => { setChapterIndex(0); setScreen('chapter'); scrollTop(); };
  if (screen === 'home') return <HomeScreen onBegin={() => { onMusicStart(); goJourneys(); }} onJourneys={goJourneys} onSelectPath={selectPath} />;
  if (screen === 'journeys') return <JourneyScreen onHome={goHome} onSelect={selectPath} completedChapters={completed} />;
  if (screen === 'chapter') return <ChapterScreen chapter={activeChapter} pathway={activePath} chapterIndex={chapterIndex} onPrev={prev} onNext={next} onReturn={goJourneys} onSelectPath={selectPath} activePathId={activePathId} />;
  return <CompletionScreen pathway={activePath} onJourneys={goJourneys} onHome={goHome} onRestart={restart} />;
}

export default function App() {
  const [musicStarted, setMusicStarted] = useState(false);
  const musicPlayerRef = useRef<MusicPlayerHandle>(null);
  return <><JourneyApp onMusicStart={() => { setMusicStarted(true); musicPlayerRef.current?.start(); }} /><MusicPlayer ref={musicPlayerRef} startPlaying={musicStarted} /></>;
}
