import React from 'react';
import Webcam from 'react-webcam';

export const Camera = () => {
  const webcamRef = React.useRef(null);

  const videoConstraints = {
    width: 414, //356
    height: 644,
    facingMode: 'user',
  };

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"/* 
        height={videoConstraints.height}
        width={videoConstraints.width} */
        videoConstraints={videoConstraints}
        style = {{
          objectFit : "contain"
        }}
      />
    </div>
  );
};

