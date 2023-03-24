import React from 'react';



type Props = {
    lefttimes: number;
  };



  function getColor(lefttimes: number) {
    if (lefttimes >= 50 && lefttimes <= 100) {
      // 緑
      return 'lightGreen';
    } else if (lefttimes >= 25 && lefttimes < 50) {
      // 黄色
      return '#FFFF00';
    } else if (lefttimes >= 0 && lefttimes < 25) {
      // 赤
      return '#FF0000';
    } else {
      // 例外処理：範囲外の値が渡された場合
      
    }
  }
  

export const Progress = ({ lefttimes } : Props) => {
  const progressWidth = `${(lefttimes * 5).toFixed(2)}%`;
  const barStyle = {
    width: progressWidth,
    height: '100%',
    backgroundColor: 'white',
  };

  const containerStyle = {
    width: '100%',
    height: 10,
    backgroundColor: getColor((100 - lefttimes * 5)),
  };

  return (
    <div style={containerStyle}>
      <div style={barStyle} />
      <div style={{color : "white"}}>height</div>
    </div>
  );
};

