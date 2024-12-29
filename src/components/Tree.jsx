import { BufferGeometry, Float32BufferAttribute } from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Tree = ({
  position = [0, -1.4, 0],
  scale = [1, 1, 1],
  color = '#00ff00',
  spiralCount,
}) => {
  const points = [];
  const radius = 1.4;
  const height = 3.6;
  const pointCount = 1500;

  for (let i = 0; i < pointCount; i++) {
    const t = i / pointCount;
    const angle = Math.PI * 2 * t * spiralCount;
    const r = radius * (1 - t);
    const y = height * t;

    const x = r * Math.cos(angle);
    const z = r * Math.sin(angle);

    points.push(x, y, z);
  }

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(points, 3));

  const pointsRef = useRef();

  useFrame(({ clock }) => {
    const rotationSpeed = 0.7;
    const time = clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = rotationSpeed * time;
    }
  });

  return (
    <points
      ref={pointsRef}
      geometry={geometry}
      position={position}
      scale={scale}
    >
      <pointsMaterial color={color} size={0.025} />
    </points>
  );
};

export default Tree;
