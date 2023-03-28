import React from 'react';

 const Triangle = {
  width: 0,
  height: 0,
  borderLeft: '50px solid transparent',
  borderRight: '50px solid transparent',
  borderBottom: '100px solid rgba(255, 255, 255, 0.5)',
  transform: 'rotate(90deg)',
};

const Text = {
  marginTop: '20px',
  color: 'rgba(255, 255, 255, 0.5)',
};

export const NextQuestionButton: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: 200 }}>
      <div style={Triangle} />
      <div style={Text}>テストを開始</div>
    </div>
  );
};

