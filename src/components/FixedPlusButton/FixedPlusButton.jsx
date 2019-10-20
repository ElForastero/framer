import React, { useContext, useRef, useEffect, useState } from 'react';
import useDragPosition from 'hooks/useDragPosition';
import PlusButton from 'components/PlusButton';
import { layer1 } from 'constants/layers';
import { OptionsContext } from 'context/Options';

const buttonRadiusMap = {
  small: 15,
  medium: 20,
  large: 25,
};

const FixedPlusButton = props => {
  const [{ buttonSize }] = useContext(OptionsContext);
  const [show, setShow] = useState(true);
  const radius = buttonRadiusMap[buttonSize];
  const ref = useRef(null);
  const position = useDragPosition(ref);

  useEffect(() => {
    const hideOnFullScreen = () => setShow(document.fullscreenElement === null);
    document.addEventListener('fullscreenchange', hideOnFullScreen);
    return () => document.removeEventListener('fullscreenchange', hideOnFullScreen);
  }, []);

  const x = !!position.x ? window.innerWidth - (position.x + radius) : 0;
  const y = !!position.y ? window.innerHeight - (position.y + radius) : 0;
  const style = {
    position: 'fixed',
    zIndex: layer1,
    left: `calc(100% - ${radius * 2}px)`,
    top: `calc(100% - ${radius * 2}px)`,
    transform: `translate3d(${-x}px, ${-y}px, 0)`,
    visibility: !!position.x ? 'visible' : 'hidden',
  };

  // Hide icon in fullscreen
  if (!show) return null;

  return <PlusButton style={style} radius={radius} ref={ref} {...props} />;
};

export default FixedPlusButton;
