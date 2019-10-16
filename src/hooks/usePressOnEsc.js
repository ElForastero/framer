import { useEffect, useRef } from 'react';

const usePressOnEsc = callback => {
  const handlerRef = useRef(callback);

  useEffect(() => {
    handlerRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = event => {
      if (event.key.toLowerCase() === 'escape') handlerRef.current(event);
    };

    document.addEventListener('keydown', handler);

    return () => document.removeEventListener('keydown', handler);
  }, []);
};

export default usePressOnEsc;
