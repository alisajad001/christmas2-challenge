import { Html } from '@react-three/drei';
import { Info, X } from 'lucide-react';
import { useState } from 'react';

const creditsData = [
  {
    title: 'Created by',
    name: 'Ali Sajad',
    link: 'https://github.com/alisajad001',
  },
  {
    title: 'Surprise sound',
    name: 'Universfield',
    link: 'https://pixabay.com/users/universfield-28281460/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=250238',
  },
  {
    title: 'Background music',
    name: 'Sergio Prosvirini',
    link: 'https://pixabay.com/users/top-flow-28521292/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=265741',
  },
  {
    title: 'Snowflake texture',
    name: 'Pinterest',
    link: 'https://es.pinterest.com/pin/423338433693642625/',
  },
  {
    title: 'Plane snow texture',
    name: 'Poly Haven',
    link: 'https://polyhaven.com/a/snow_02',
  },
];

const Credits = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleCredits = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <Html position={[-4, 1.5, 2]} distanceFactor={9}>
      <div className="relative">
        {/* Info Button */}
        <button
          onClick={toggleCredits}
          className="w-10 h-10 bg-slate-900 text-white bg-opacity-50 rounded-lg flex items-center justify-center"
        >
          <Info size={24} />
        </button>

        {/* Credits Panel */}
        {isVisible && (
          <div className="absolute top-0 left-12 w-96 bg-slate-900 text-white bg-opacity-90 rounded-lg p-4 shadow-lg">
            <button
              onClick={toggleCredits}
              className="absolute top-3 right-3 text-white"
            >
              <X size={24} />
            </button>
            <h1 className="text-2xl font-bold">Credits</h1>
            <hr className="my-3 border-slate-700" />
            <div className="space-y-2">
              {creditsData.map(({ title, name, link }, index) => (
                <div key={index} className="text-sm flex gap-2">
                  <h2 className="font-semibold">{title}:</h2>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 underline hover:text-blue-300"
                  >
                    {name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Html>
  );
};

export default Credits;
