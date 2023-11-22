"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface AnimatedNumberProps {
  stopAt: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ stopAt }) => {
  const [number, setNumber] = useState<number>(0);
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const interval = setInterval(() => {
              setNumber((prevNumber) => {
                const updatedNumber = prevNumber + 1;
                return updatedNumber <= stopAt ? updatedNumber : stopAt;
              });
            }, 30);

            // Clear the interval and disconnect observer when the component is out of view
            return () => {
              clearInterval(interval);
              observer.disconnect();
            };
          }
        });
      },
      { threshold: 0.5 }
    );

    if (numberRef.current) {
      observer.observe(numberRef.current);
    }

    return () => {
      if (numberRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(numberRef.current);
      }
    };
  }, [stopAt]);

  return (
    <motion.span
      ref={numberRef}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="font-bold text-4xl"
    >
      {number}
    </motion.span>
  );
};

export default AnimatedNumber;
