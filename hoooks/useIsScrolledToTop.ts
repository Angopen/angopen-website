"use client"

import { useState, useEffect } from 'react';

export const useIsScrolledToTop = (threshold: number = 0): boolean => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY <= threshold;
      setIsAtTop(atTop);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isAtTop;
};