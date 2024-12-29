import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SnowFlakes from './SnowFlakes';
import PlaneGeo from './PlaneGeo';
import Tree from './Tree';
import Lights from './Lights';
import controls from './Controls';
import Sounds from './Sounds';
import Surprise from './Surprise';
import Credits from './Credits';
import { useState } from 'react';

const Experience = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Destructure controls for cleaner usage
  const { tree1Color, tree2Color, tree3Color, spiralCount } = controls();

  // Trees configuration
  const trees = [
    { color: tree1Color, position: [0, -1.4, 0], scale: [1, 1, 1] },
    { color: tree2Color, position: [2, -1.4, -4], scale: [0.7, 0.7, 0.7] },
    { color: tree3Color, position: [-3, -1.4, -2], scale: [0.5, 0.5, 0.5] },
  ];

  return (
    <Canvas>
      {/* Snowflakes */}
      <SnowFlakes />

      {/* Sounds */}
      <Sounds isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

      {/* Lights */}
      <Lights {...{ tree1Color, tree2Color, tree3Color, isPlaying }} />

      {/* Trees */}
      {trees.map(({ color, position, scale }, index) => (
        <Tree
          key={index}
          color={color}
          position={position}
          scale={scale}
          spiralCount={spiralCount}
        />
      ))}

      {/* Plane Geometry */}
      <PlaneGeo />

      {/* Surprise Element */}
      <Surprise />

      {/* Credits */}
      <Credits />

      {/* Camera Controls */}
      <OrbitControls
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI - Math.PI / 2}
        minDistance={6}
        maxDistance={6}
      />
    </Canvas>
  );
};

export default Experience;
