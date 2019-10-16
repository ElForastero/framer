import { useState } from 'react';

export default () => {
  const [state] = useState(
    Math.random()
      .toString(16)
      .substr(8)
  );

  return state;
};
