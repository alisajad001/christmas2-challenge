import React, { useRef, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const SnowFlakes = () => {
  const particlesRef = useRef();
  const snowFlakesNum = 3000;
  const maxRange = 1000;
  const minRange = maxRange / 2;
  const minHeight = 150;

  // Generate positions and velocities for the snowflakes
  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(snowFlakesNum * 3);
    const velocities = new Float32Array(snowFlakesNum * 3);

    for (let i = 0; i < snowFlakesNum; i++) {
      positions.set(
        [
          Math.random() * maxRange - minRange,
          Math.random() * minRange + minHeight,
          Math.random() * maxRange - minRange,
        ],
        i * 3
      );

      velocities.set(
        [(Math.random() * 6 - 3) * 0.1, (Math.random() * 5 + 0.12) * 0.3, 0],
        i * 3
      );
    }
    return { positions, velocities };
  }, [snowFlakesNum, maxRange, minRange, minHeight]);

  useFrame(() => {
    if (!particlesRef.current) return;

    const positionAttr = particlesRef.current.geometry.attributes.position;

    for (let i = 0; i < snowFlakesNum; i++) {
      const yIndex = i * 3 + 1;

      positionAttr.array[yIndex] -= velocities[i * 3 + 1];

      if (positionAttr.array[yIndex] < -60) {
        positionAttr.array[yIndex] = Math.random() * minRange + minHeight;
        positionAttr.array[i * 3] = Math.random() * maxRange - minRange; // X reset
        positionAttr.array[i * 3 + 2] = Math.random() * maxRange - minRange; // Z reset
      }
    }

    positionAttr.needsUpdate = true;
  });

  // Load texture
  const snowflakeTexture = useLoader(TextureLoader, '/textures/snowflake.png');

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={snowFlakesNum}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={3}
        map={snowflakeTexture}
        depthWrite={false}
        alphaTest={0.3}
      />
    </points>
  );
};

export default SnowFlakes;
