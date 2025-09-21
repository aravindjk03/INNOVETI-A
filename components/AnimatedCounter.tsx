'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { CountUp } from 'countup.js';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter = ({ end, duration = 2, suffix = '', prefix = '' }: AnimatedCounterProps) => {
  const countRef = useRef<HTMLSpanElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && countRef.current) {
      const countUp = new CountUp(countRef.current, end, {
        duration,
        suffix,
        prefix,
        decimalPlaces: end % 1 !== 0 ? 1 : 0, // Use 1 decimal place for decimal numbers
        decimal: '.',
      });
      countUp.start();
    }
  }, [inView, end, duration, suffix, prefix]);

  return (
    <div ref={ref}>
      <span ref={countRef}>0{suffix}</span>
    </div>
  );
};

export default AnimatedCounter;