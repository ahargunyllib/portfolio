'use client';
import { useEffect } from 'react';
import styled from 'styled-components';

import { Gradient } from './Gradient';

const Background = () => {
  useEffect(() => {
    // Create your instance
    const gradient = new Gradient();

    // Call `initGradient` with the selector to your canvas
    gradient.initGradient('#gradient-canvas');
  }, []);

  const StyledCanvas = styled.canvas`
    width: 100%;
    height: 100%;
    --gradient-color-1: #38bdf8;
    --gradient-color-2: #0a111f;
    --gradient-color-3: #0f172a;
    --gradient-color-4: #0c1424;
    z-index: 1
  `;

  return (
    <>
      <StyledCanvas id="gradient-canvas" data-transition-in className='absolute'/>
    </>
  );
};

export default Background;