import { useEffect, useState, useRef } from 'react';

interface UseNumberAnimationOptions {
  duration?: number;
  delay?: number;
  decimals?: number;
  separator?: string;
}

export const useNumberAnimation = (
  target: number,
  options: UseNumberAnimationOptions = {},
) => {
  const { duration = 2000, delay = 0, decimals = 0, separator = ',' } = options;

  const [value, setValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setIsAnimating(true);
        }
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px',
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isAnimating) return;

    const startTime = Date.now();
    const endTime = startTime + duration + delay;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime - delay) / duration, 1);

      if (progress >= 1) {
        setValue(target);
      } else {
        const currentValue = target * progress;
        setValue(currentValue);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animationTimeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(animationTimeout);
  }, [isAnimating, target, duration, delay]);

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return num.toLocaleString('en-US', {
        maximumFractionDigits: decimals,
      });
    }
    return num.toFixed(decimals);
  };

  return {
    value,
    formattedValue: formatNumber(value),
    ref,
    isAnimating,
  };
};
