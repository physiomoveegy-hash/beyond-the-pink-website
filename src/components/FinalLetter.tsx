import { Printer, ArrowLeft, Heart } from 'lucide-react';
import { Botanical } from '@/components/Botanical';
import { AwarenessRibbon } from '@/components/AwarenessRibbon';

interface FinalLetterProps {
  onReturnHome: () => void;
}

export function FinalLetter({ onReturnHome }: FinalLetterProps) {
  return (
    <div className="min-h-screen bg-ivory animate-fade-in">
      <div className="no-print sticky top-0 z-20 bg-ivory/90 backdrop-blur-sm border-b border-blush/30">
        <div className="max-w-3xl mx-auto px-5 py-4 flex items-center justify-between">
          <button
            onClick={onReturnHome}
            className="inline-flex items-center gap-2 text-sm font-sans text-dusty-rose hover:text-burgundy transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-4 py-2 bg-burgundy text-ivory rounded-full font-sans text-sm hover:bg-deep-burgundy transition-colors duration-300"
          >
            <Printer className="w-4 h-4" />
            Print Letter
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 md:px-8 py-10 md:py-16">
        <div className="text-center mb-10 relative">
          <AwarenessRibbon className="w-10 h-auto mx-auto mb-4" />
          <Botanical variant="sprig" className="w-12 h-24 mx-auto opacity-60 mb-4" />
          <p className="text-sm font-sans text-dusty-rose tracking-[0.2em] uppercase mb-3">
            A Little Journey Back to Yourself
          </p>
          <h1 className="text-3xl md:text-5xl font-serif text-burgundy font-medium leading-tight">
            To You,<br />A Message from One Woman to Another
          </h1>
          <div className="mt-8 mx-auto max-w-xl h-40 md:h-52 rounded-[1.75rem] overflow-hidden border border-blush/40 shadow-lg">
            <img
              src="/assets/breast-cancer-awareness-ribbon.jpg"
              alt="Pink breast cancer awareness ribbon surrounded by delicate botanical details"
              loading="eager"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center' }}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          <div className="h-48 rounded-2xl overflow-hidden border border-blush/40 shadow-md">
            <img
              src="/assets/women-supporting-each-other.jpg"
              alt="Two women embracing and supporting one another"
              loading="lazy"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center' }}
            />
          </div>
          <div className="h-48 rounded-2xl overflow-hidden border border-blush/40 shadow-md">
            <img
              src="/assets/woman-journaling.jpg"
              alt="Woman writing peacefully in a journal beside flowers"
              loading="lazy"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center' }}
            />
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-6 text-deep-burgundy/85 font-sans text-base md:text-lg leading-relaxed">
            <p className="font-serif text-xl text-burgundy italic">Dear Friend,</p>

            <p>
              If you have made it this far, you have taken a journey — perhaps one you did not expect to take, and perhaps one that asked more of you than you thought you could give. I want you to know that simply being here, reading these words, is an act of courage.
            </p>

            <p>
              You may be here because you wanted to understand your body better. You may be here because something worried you, and you were looking for clarity. You may be here because someone you love is facing something difficult, and you did not know where to turn. Whatever brought you here, I want you to know: you are welcome, and you are not alone.
            </p>

            <p>
              I have spent my career working with women through some of the most vulnerable moments of their lives. And if there is one thing I have learned, it is this: women deserve accurate information, delivered with respect and compassion. Not fear. Not shame. Not cold clinical language that leaves you more confused than before. You deserve to understand your own body in words that make sense to you.
            </p>

            <p>
              If you noticed something unusual and came here looking for answers, I want to say something clearly: most breast changes are not cancer. But you should never have to sit with worry alone. If something does not feel right, please see a healthcare professional. You are not being a burden. You are not overreacting. You are taking care of yourself, and that is always the right decision.
            </p>

            <p>
              If you are supporting someone you love, I want to thank you. The women I see in my practice often tell me that the people who stood beside them — quietly, consistently, without drama — made more difference than any medicine. Your presence matters more than you know.
            </p>

            <p>
              And if you are someone who has been diagnosed — if these words find you in a waiting room, or in the quiet of a sleepless night — I want you to hear this: you are more than a diagnosis. You are a whole person with a whole life, and this is one chapter, not the entire book. There are people ready to help you. There is care that is compassionate and respectful. There is a path forward, and you do not have to walk it alone.
            </p>

            <p>
              I will not make you false promises. I will not tell you that everything will be fine, because I do not know your story. But I will tell you what I do know: you deserve information without fear. You deserve care without judgment. You deserve to be treated as a whole person, not just a patient. And you deserve support that does not fade when the hardest part seems to be over.
            </p>

            <p>
              This website was created as part of the She Can Project at AUC Cairo, because we believe that knowledge is a form of care. When a woman understands her body, she can advocate for herself. When she knows her options, she can make choices that are right for her. When she feels supported, she is stronger — not because she has to be strong, but because she does not have to face it alone.
            </p>

            <p>
              So wherever you are on your journey — just beginning, somewhere in the middle, or supporting someone else — I hope you carry this with you: you deserve to be informed. You deserve to be heard. You deserve to be cared for with dignity and warmth. And you deserve to move at your own pace.
            </p>

            <p className="text-center font-serif text-2xl text-burgundy italic py-4">
              A Brighter Tomorrow Together
            </p>

            <div className="pt-4">
              <p className="font-serif text-lg text-burgundy">With care,</p>
              <p className="font-serif text-xl text-deep-burgundy mt-1">
                Dr. Dahlia El Hosiney
              </p>
              <p className="text-sm font-sans text-warm-gray mt-1">
                Founder, PhysioMove Clinic
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blush/40 text-center no-print">
          <Heart className="w-8 h-8 text-dusty-rose/40 mx-auto mb-4" />
          <button
            onClick={onReturnHome}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-burgundy text-ivory rounded-full font-sans text-base hover:bg-deep-burgundy transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to the Beginning
          </button>
        </div>

        <div className="mt-10 pt-6 border-t border-blush/30 print-only">
          <p className="text-xs font-sans text-warm-gray text-center">
            This website provides general educational information and does not replace professional medical assessment.
            If you notice a new or unusual breast change, seek appropriate medical advice. Do not delay care to complete this guide.
          </p>
        </div>
      </div>
    </div>
  );
}
