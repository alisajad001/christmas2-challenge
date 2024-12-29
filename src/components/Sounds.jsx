import { Html } from '@react-three/drei';
import { Volume2, VolumeOff } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Sounds({ isPlaying, setIsPlaying }) {
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current = new Audio('/sounds/christmas-sprit.mp3');
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Html distanceFactor={6} position={[-4, 2, 2]}>
      <div className="flex items-center gap-2 w-52 p-2 font-bold rounded-md bg-slate-900 text-white">
        <button
          onClick={togglePlay}
          className="w-10 h-10 flex justify-center items-center rounded-md bg-slate-800 border"
        >
          {isPlaying ? <Volume2 size={24} /> : <VolumeOff size={24} />}
        </button>

        <p>Background Music</p>
      </div>
    </Html>
  );
}
