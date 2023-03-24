import React from 'react';

type Props = {
    totalSeconds: number;
  };
  

export const SecondsToMinutes = ({ totalSeconds } : Props) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds - minutes * 60);

  return (
    <div>
      {minutes}分{seconds}秒
    </div>
  );
};
