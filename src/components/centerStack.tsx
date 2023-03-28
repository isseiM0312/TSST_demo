import React from 'react';

type CenterStackProps = {
  children: React.ReactNode;
};

export const CenterStack: React.FC<CenterStackProps> = ({ children }) => {
  return (
    <div
      style={{
        width: 356,
        height: '812px',
        position: 'relative',
      }}
    >
    <div style={{
          top : 10,
          left : 10,
        position: 'absolute',
        width: 200,
        height: 10,
      }} >
      {children}
      </div>
    </div>
  );
};
