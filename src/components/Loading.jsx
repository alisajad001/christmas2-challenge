import { Html, useProgress } from '@react-three/drei';

const Loading = () => {
  const { progress } = useProgress();

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      {/* Progress Bar */}
      <div
        className="h-full bg-blue-500 transition-all duration-300 absolute"
        style={{ width: `${progress}%` }}
      ></div>

      {/* Loading Text */}
      <p className="text-white text-lg font-medium z-10">
        Loading... {Math.floor(progress)}%
      </p>
    </div>
  );
};

export default Loading;
