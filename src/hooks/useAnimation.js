import { useState, useCallback, useEffect } from 'react';

export function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);

  const toggle = useCallback(() => setIsPlaying(prev => !prev), []);

  const changeSpeed = useCallback((newSpeed) => {
    setSpeed(newSpeed);
  }, []);

  // 스페이스바로 토글
  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === 'Space' && e.target.tagName !== 'BUTTON') {
        e.preventDefault();
        toggle();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [toggle]);

  return { isPlaying, speed, toggle, changeSpeed };
}
