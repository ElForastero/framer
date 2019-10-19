import { useState, useEffect, useRef } from 'react';

const useDragPosition = ref => {
  const preventRef = useRef(false);
  const [position, setPosition] = useState({ x: null, y: null });

  // Update position after loading
  useEffect(() => {
    const { x, y } = ref.current.getBoundingClientRect();
    setPosition({ x, y });
  }, []);

  useEffect(() => {
    const preventClick = event => {
      if (preventRef.current === true) {
        preventRef.current = false;
        event.stopImmediatePropagation();
      }
      window.removeEventListener('click', preventClick, true);
    };
    const addPositionListener = () => {
      window.addEventListener('mousemove', handler);
    };
    const removePositionListener = () => {
      window.addEventListener('click', preventClick, true);
      window.removeEventListener('mousemove', handler);
    };
    const handler = ({ clientX, clientY }) => {
      // Prevent onClick from being fired on dragged element
      if (!preventRef.current) preventRef.current = true;
      setPosition({ x: clientX, y: clientY });
    };

    ref.current.addEventListener('mousedown', addPositionListener);
    ref.current.addEventListener('mouseup', removePositionListener);

    return () => {
      ref.current.removeEventListener('mousedown', addPositionListener);
      ref.current.removeEventListener('mouseup', removePositionListener);
    };
  }, []);

  return position;
};

export default useDragPosition;
