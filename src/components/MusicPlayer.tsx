import { forwardRef, useRef, useState, useEffect, useCallback, useImperativeHandle } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const AUDIO_SOURCE = '/audio/hopeful.mp3';

interface MusicPlayerProps {
  startPlaying: boolean;
}

export interface MusicPlayerHandle {
  start: () => void;
}

function describeAudioError(audio: HTMLAudioElement, error: unknown): string {
  const mediaError = audio.error;
  const mediaDetails = mediaError ? `media code ${mediaError.code}${mediaError.message ? `: ${mediaError.message}` : ''}` : 'no media error code';
  const rejection = error instanceof DOMException ? `${error.name}: ${error.message}` : error instanceof Error ? `${error.name}: ${error.message}` : String(error);
  return `${rejection}; readyState ${audio.readyState}; networkState ${audio.networkState}; ${mediaDetails}`;
}

export const MusicPlayer = forwardRef<MusicPlayerHandle, MusicPlayerProps>(function MusicPlayer({ startPlaying }, ref) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioReady, setAudioReady] = useState(false);
  const [failure, setFailure] = useState<string | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.25;
    audio.muted = false;

    const handleCanPlay = () => {
      setAudioReady(true);
      console.info('[MusicPlayer] audio ready', {
        readyState: audio.readyState,
        networkState: audio.networkState,
        error: audio.error,
      });
    };
    const handleEnded = () => setIsPlaying(false);
    const handleError = () => {
      const details = describeAudioError(audio, new Error('Audio element error'));
      console.error('[MusicPlayer] audio element error', details);
      setFailure(details);
    };
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.load();

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.pause();
    };
  }, []);

  const play = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) {
      const details = 'Audio element unavailable';
      console.error('[MusicPlayer] play() could not start', details);
      setFailure(details);
      return;
    }

    audio.muted = isMuted;
    console.info('[MusicPlayer] play() called', {
      readyState: audio.readyState,
      networkState: audio.networkState,
      error: audio.error,
      source: AUDIO_SOURCE,
    });

    try {
      await audio.play();
      setIsPlaying(true);
      setFailure(null);
      console.info('[MusicPlayer] play() resolved', {
        readyState: audio.readyState,
        networkState: audio.networkState,
        currentTime: audio.currentTime,
      });
    } catch (error) {
      const details = describeAudioError(audio, error);
      console.error('[MusicPlayer] play() rejected', details);
      setFailure(details);
    }
  }, [isMuted]);

  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
  }, []);

  useImperativeHandle(ref, () => ({ start: () => { void play(); } }), [play]);

  useEffect(() => {
    if (startPlaying && audioReady && !failure) {
      void play();
    }
  }, [startPlaying, audioReady, failure, play]);

  const togglePlay = useCallback(() => {
    if (isPlaying) pause();
    else void play();
  }, [isPlaying, pause, play]);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const newMuted = !isMuted;
    audio.muted = newMuted;
    setIsMuted(newMuted);
  }, [isMuted]);

  return (
    <>
      <audio
        ref={audioRef}
        preload="auto"
        loop
        playsInline
        aria-hidden="true"
        className="absolute w-px h-px opacity-0 pointer-events-none"
      >
        <source src={AUDIO_SOURCE} type="audio/mpeg" />
      </audio>

      {startPlaying && failure ? (
        <div className="fixed bottom-5 right-5 z-50 no-print rounded-full border border-blush/50 bg-ivory/95 px-4 py-2 shadow-lg">
          <span className="text-xs font-sans text-burgundy" role="status">Music is unavailable right now</span>
        </div>
      ) : null}

      {startPlaying && !failure ? (
        <div className="fixed bottom-5 right-5 z-50 no-print">
          <div className="flex items-center gap-1 bg-ivory/90 backdrop-blur-sm rounded-full shadow-lg border border-blush/40 px-3 py-2 transition-all duration-300 hover:shadow-xl">
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause music' : 'Play music'}
              className="w-9 h-9 rounded-full flex items-center justify-center text-burgundy hover:bg-blush/30 transition-colors duration-300"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>
            <button
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute music' : 'Mute music'}
              className="w-9 h-9 rounded-full flex items-center justify-center text-burgundy hover:bg-blush/30 transition-colors duration-300"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            {isPlaying && !isMuted && (
              <span className="flex gap-0.5 items-end h-4 ml-0.5 mr-1">
                <span className="w-0.5 bg-dusty-rose rounded-full animate-pulse" style={{ height: '40%', animationDuration: '0.8s' }} />
                <span className="w-0.5 bg-dusty-rose rounded-full animate-pulse" style={{ height: '70%', animationDuration: '1.1s' }} />
                <span className="w-0.5 bg-dusty-rose rounded-full animate-pulse" style={{ height: '50%', animationDuration: '0.9s' }} />
              </span>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
});
