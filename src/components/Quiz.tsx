import { useState } from 'react';
import { Check, X, RefreshCw, Sparkles } from 'lucide-react';
import type { QuizQuestion } from '@/data/content';

interface QuizProps {
  questions: QuizQuestion[];
}

export function Quiz({ questions }: QuizProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const question = questions[currentQ];

  const handleAnswer = (answer: boolean) => {
    if (answered) return;
    setSelectedAnswer(answer);
    setAnswered(true);
    if (answer === question.answer) setScore((value) => value + 1);
  };

  const nextQuestion = () => {
    if (currentQ + 1 < questions.length) {
      setCurrentQ((value) => value + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const allCorrect = score === questions.length;
    return (
      <div className="rounded-[1.5rem] bg-gradient-to-br from-gold/15 to-rose/15 p-7 text-center animate-fade-in">
        <Sparkles className="mx-auto mb-4 h-10 w-10 text-gold" />
        <h3 className="mb-2 font-display text-2xl font-semibold text-green md:text-3xl">نتيجتك {score} من {questions.length}</h3>
        <p className="mb-6 font-body leading-relaxed text-charcoal/75">
          {allCorrect ? 'ممتاز! لديكِ أساس قوي من المعلومات.' : score >= 3 ? 'أحسنتِ. لديكِ أساس جيد، ويمكنك مراجعة الشروحات لمزيد من المعرفة.' : 'شكرًا لمشاركتك. التعلم رحلة، ويمكنك العودة لمراجعة المعلومات.'}
        </p>
        <button onClick={restart} className="inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 font-body text-sm font-medium text-white transition hover:bg-green/90">
          <RefreshCw className="h-4 w-4" /> إعادة الاختبار
        </button>
      </div>
    );
  }

  const answerButton = (answer: boolean, label: string, Icon: typeof Check) => {
    const isCorrect = question.answer === answer;
    const isSelected = selectedAnswer === answer;
    return (
      <button
        onClick={() => handleAnswer(answer)}
        disabled={answered}
        className={`flex flex-1 items-center justify-center gap-2 rounded-xl border-2 px-5 py-4 font-body text-base transition-all ${answered ? isCorrect ? 'border-green bg-green/10 text-green' : isSelected ? 'border-rose bg-rose/10 text-charcoal' : 'border-green/10 bg-white/50 text-charcoal/50' : 'border-green/20 bg-white text-green hover:border-gold hover:bg-gold/10'}`}
      >
        <Icon className="h-5 w-5" /> {label}
      </button>
    );
  };

  return (
    <div className="rounded-[1.5rem] bg-gradient-to-br from-green/5 to-bone p-6 animate-fade-in md:p-8">
      <div className="mb-6 flex items-center justify-between font-body text-sm text-charcoal/60">
        <span>السؤال {currentQ + 1} من {questions.length}</span>
        <span className="text-green">النقاط: {score}</span>
      </div>
      <h3 className="mb-6 font-display text-xl font-semibold leading-relaxed text-green md:text-2xl">{question.question}</h3>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row" dir="rtl">
        {answerButton(true, 'صحيح', Check)}
        {answerButton(false, 'غير صحيح', X)}
      </div>
      {answered && (
        <div className="animate-fade-in-up">
          <div className={`mb-4 rounded-xl border p-4 ${selectedAnswer === question.answer ? 'border-green/30 bg-green/10' : 'border-rose/40 bg-rose/10'}`}>
            <p className="font-body text-sm leading-relaxed text-charcoal/80 md:text-base"><strong className="text-green">{selectedAnswer === question.answer ? 'إجابة صحيحة. ' : 'ليست الإجابة الأدق. '}</strong>{question.explanation}</p>
          </div>
          <button onClick={nextQuestion} className="rounded-full bg-green px-6 py-3 font-body text-sm text-white transition hover:bg-green/90">
            {currentQ + 1 < questions.length ? 'السؤال التالي' : 'عرض النتيجة'}
          </button>
        </div>
      )}
    </div>
  );
}
