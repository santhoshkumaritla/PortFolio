import { useEffect, useRef, useState } from 'react';

type AnimationType = 'fade-in' | 'slide-up' | 'scale-up' | 'slide-right' | 'slide-left';

interface UseScrollAnimationOptions {
  threshold?: number;
  animationType?: AnimationType;
  delay?: number;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { 
    threshold = 0.1, 
    animationType = 'fade-in',
    delay = 0
  } = options;
  
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(currentRef);
        }
      },
      { threshold }
    );
    
    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);
  
  const getAnimationClass = () => {
    if (!isVisible) {
      switch (animationType) {
        case 'fade-in':
          return 'opacity-0';
        case 'slide-up':
          return 'opacity-0 translate-y-16';
        case 'scale-up':
          return 'opacity-0 scale-95';
        case 'slide-right':
          return 'opacity-0 -translate-x-16';
        case 'slide-left':
          return 'opacity-0 translate-x-16';
        default:
          return 'opacity-0';
      }
    }
    return 'opacity-100 translate-y-0 translate-x-0 scale-100';
  };
  
  const animationClasses = `transform transition-all duration-1000 ease-out ${getAnimationClass()}`;
  
  return { ref, isVisible, animationClasses };
};

export default useScrollAnimation;