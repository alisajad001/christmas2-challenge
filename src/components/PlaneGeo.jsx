import { Plane } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const PlaneGeo = () => {
  const [aoMap, normalMap, roughnessMap, displacementMap, bumpMap, map] =
    useLoader(TextureLoader, [
      '/textures/snow_02_1k/textures/snow_02_ao_1k.jpg',
      '/textures/snow_02_1k/textures/snow_02_nor_gl_1k.jpg',
      '/textures/snow_02_1k/textures/snow_02_rough_1k.jpg',
      '/textures/snow_02_1k/textures/snow_02_disp_1k.png',
      '/textures/snow_02_1k/textures/snow_02_bump_1k.png',
      '/textures/snow_02_1k/textures/snow_02_diff_1k.jpg',
    ]);

  return (
    <Plane
      args={[30, 30, 100, 100]}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -2, 0]}
    >
      <meshStandardMaterial
        map={map}
        aoMap={aoMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        displacementMap={displacementMap}
        bumpMap={bumpMap}
        displacementScale={2}
      />
    </Plane>
  );
};

export default PlaneGeo;
