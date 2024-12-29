import { useControls } from 'leva';

const controls = () => {
  const { tree1Color, tree2Color, tree3Color, spiralCount } = useControls({
    tree1Color: { value: '#ffbf00', label: 'Tree 1 Color' },
    tree2Color: { value: '#ff59d0', label: 'Tree 2 Color' },
    tree3Color: { value: '#86ff4e', label: 'Tree 3 Color' },
    spiralCount: {
      value: 137,
      label: 'Spiral Count',
      min: 10,
      max: 137,
      step: 23,
    },
  });

  return { tree1Color, tree2Color, tree3Color, spiralCount };
};

export default controls;
