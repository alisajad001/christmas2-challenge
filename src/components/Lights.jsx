import { useState, useEffect } from 'react';

const Lights = ({ tree1Color, tree2Color, tree3Color, isPlaying }) => {
  const [intensityTree1, setIntensityTree1] = useState(15);
  const [intensityTree2, setIntensityTree2] = useState(5);
  const [intensityTree3, setIntensityTree3] = useState(5);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setIntensityTree1(Math.random() * 20 + 10);
        setIntensityTree2(Math.random() * 20 + 10);
        setIntensityTree3(Math.random() * 20 + 10);
      }, 150);
    } else {
      setIntensityTree1(15);
      setIntensityTree2(5);
      setIntensityTree3(5);
    }

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <>
      <directionalLight position={[0, 5, 2]} intensity={0.3} />
      <pointLight
        position={[-0.5, 0, 0]}
        color={tree1Color}
        intensity={intensityTree1}
      />
      <pointLight
        position={[1.8, 0, -4.3]}
        color={tree2Color}
        intensity={intensityTree2}
      />
      <pointLight
        position={[-3.3, 0, -2]}
        color={tree3Color}
        intensity={intensityTree3}
      />
    </>
  );
};

export default Lights;
