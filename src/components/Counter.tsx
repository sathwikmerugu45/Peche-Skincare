"use client";

import { useEffect, useState, useRef } from 'react';

interface CounterProps {
  value: number;
  suffix?: string;
  decimal?: number;
  duration?: number;
  delay?: number;
}

export function Counter({ value, suffix = "", decimal = 0, duration = 2000, delay = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setHasAnimated(true);
            let start = 0;
            const increment = value / (duration / 16); // 60fps
            
            const timer = setInterval(() => {
              start += increment;
              if (start >= value) {
                setCount(value);
                clearInterval(timer);
              } else {
                setCount(start);
              }
            }, 16);
          }, delay);
        }
      },
      { threshold: 0.5 } // Start when 50% of element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, delay, hasAnimated]);

  return (
    <span ref={ref} className="inline-block">
      {hasAnimated ? (
        <span className="animate-fade-in-up">
          {count.toFixed(decimal)}{suffix}
        </span>
      ) : (
        <span>0{suffix}</span>
      )}
    </span>
  );
}