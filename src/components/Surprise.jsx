import { Html, Text } from '@react-three/drei';
import { useState, useEffect } from 'react';

const Surprise = () => {
  const [name, setName] = useState('');
  const [surpriseSound, setSurpriseSound] = useState(null);
  const [showSurprise, setShowSurprise] = useState(false);

  useEffect(() => {
    const audio = new Audio('/sounds/surprise.mp3');
    setSurpriseSound(audio);

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const handleClick = () => {
    if (name && surpriseSound) {
      setShowSurprise(true);

      // Play the surprise sound
      surpriseSound.currentTime = 0;
      surpriseSound.play();

      setTimeout(() => {
        setShowSurprise(false);
        setName('');
      }, 3000);
    }
  };

  return (
    <>
      <Html distanceFactor={9} position={[-4, 1.1, 2]}>
        <div className="flex flex-col items-center justify-center p-4 rounded-md bg-slate-900 text-white">
          <input
            placeholder="Enter your name"
            className="outline-none text-white text-center p-2 px-0 rounded"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button
            onClick={handleClick}
            disabled={!name}
            className={`mt-2 px-4 py-2 rounded border ${
              name ? 'opacity-1000 border' : 'opacity-30 cursor-not-allowed'
            }`}
          >
            🎉 Surprise Me 🎉
          </button>
        </div>
      </Html>
      {showSurprise && (
        <Text position={[0, 1.5, 2]} fontSize={0.3}>
          🎉Merry Christmas, {name}!🎉
        </Text>
      )}
    </>
  );
};

export default Surprise;
