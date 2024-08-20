import { useEffect, useRef } from 'react';

const useNoOpacity = (dependency: string, timeout: number = 1000) => {
  const elementRef = useRef();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return () => {};

    element.classList.remove('noOpacity');
    const timer = setTimeout(() => {
      element.classList.add('noOpacity');
    }, timeout);

    return () => clearTimeout(timer);
  }, [dependency, timeout]);

  return elementRef;
};

export default useNoOpacity;
