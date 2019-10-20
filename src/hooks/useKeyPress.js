import { useEffect, useRef } from 'react';

const useKeyPress = (ref, key, callback) => {
  const handlerRef = useRef(callback);

  useEffect(() => {
    handlerRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (ref.current) {
      const handler = event => {
        if (event.key.toLowerCase() === key) handlerRef.current(event);
      };

      ref.current.addEventListener('keypress', handler);

      return () => ref.current.removeEventListener('keypress', handler);
    }
  }, [ref]);
};

export default useKeyPress;
