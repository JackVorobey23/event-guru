// utils/getRandomColor.ts
export const getRandomGreenShade = () => {
  const greenShades = [
    '#A8E6A1', // light green
    '#66BB6A', // medium green
    '#388E3C', // dark green
    '#81C784', // soft green
    '#4CAF50', // regular green
  ];
  return greenShades[Math.floor(Math.random() * greenShades.length)];
};
