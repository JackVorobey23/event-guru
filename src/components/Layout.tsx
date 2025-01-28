import { getRandomGreenShade } from '@/utils/getRandomColor'; // Updated random color function
import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';

interface Position {
  top: number;
  left: number;
}

interface BubbleProps {
  id: number;
  position: Position;
  opacity: number;
  color: string;
  size: number; // Size of the bubble
}

const Bubble = ({ id, position, opacity, color, size }: BubbleProps) => {
  return (
    <div
      key={id}
      className="absolute transition-all duration-500 blur-2xl"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        backgroundColor: color,
        opacity: opacity,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
      }}
    ></div>
  );
};

const BubblePage = () => {
  const location = useLocation();

  // State for bubbles with their positions, opacity, color, and size
  const [bubbles, setBubbles] = useState(
    Array.from({ length: 5 }, (_, id) => ({
      id,
      position: {
        top: Math.random() * window.innerHeight,
        left: Math.random() * window.innerWidth,
      },
      opacity: Math.random() * 0.7 + 0.3,
      color: getRandomGreenShade(), // Use the updated color function
      size: Math.random() * 300 + 100, // Size between 30px and 80px
    }))
  );

  useEffect(() => {
    const newBubbles = bubbles.map((bubble) => ({
      ...bubble,
      position: {
        top: Math.random() * window.innerHeight,
        left: Math.random() * window.innerWidth,
      },
      opacity: Math.random() * 0.7 + 0.3,
      color: getRandomGreenShade(), // Use the updated color function
      size: Math.random() * 300 + 100, // Size between 30px and 80px
    }));
    setBubbles(newBubbles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div className="flex-1 flex-col flex justify-center items-center text-green-950">
      <div className="absolute overflow-hidden -z-10 top-0 left-0 w-full h-full">
        {bubbles.map((bubble) => (
          <Bubble
            key={bubble.id}
            id={bubble.id}
            position={bubble.position}
            opacity={bubble.opacity}
            color={bubble.color}
            size={bubble.size}
          />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default BubblePage;
