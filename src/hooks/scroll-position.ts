import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
};
