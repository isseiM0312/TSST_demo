import React from 'react';

type BreakTimeProps = {
    breaktime: number;
  }

  const h1Style = {
    fontSize: '6rem',
    marginBottom: '1rem',
    color: 'rgba(255, 255, 255, 1)',
  };
  
  const pStyle = {
    fontSize: '1.5rem',
    color: 'rgba(255, 255, 255, 1)',
  };
  
export const BreakTime = ({ breaktime } : BreakTimeProps) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: 414 }}>
        <h1 style={h1Style}>{breaktime}</h1>
        <p style={pStyle}>次の問題に備えてください</p>
      </div>
    );
  };
  