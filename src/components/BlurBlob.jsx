import React from 'react';

const TONES = {
  gold: 'radial-gradient(closest-side, rgba(217,189,132,0.17), rgba(217,189,132,0.05) 55%, transparent 100%)',
  navy: 'radial-gradient(closest-side, rgba(38,62,130,0.36), rgba(22,36,84,0.12) 55%, transparent 100%)',
  platinum: 'radial-gradient(closest-side, rgba(214,218,236,0.075), transparent 100%)',
};

/**
 * Soft ambient light. Pure radial gradients (no blur filter), so it stays
 * cheap on the GPU even while drifting.
 */
const BlurBlob = ({ position = {}, size = {}, tone = 'gold', delay = '0s' }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute pointer-events-none"
      style={{ top, left, width, height, transform: 'translate(-50%, -50%)' }}
    >
      <div
        className="h-full w-full rounded-full animate-orbit"
        style={{ background: TONES[tone] || TONES.gold, animationDelay: delay }}
      />
    </div>
  );
};

export default BlurBlob;
