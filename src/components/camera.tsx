import React from 'react';
import Webcam from 'react-webcam';

export const Camera = () => {
  const webcamRef = React.useRef(null);

  const videoConstraints = {
    width: 200, //356
    height: 644,
    facingMode: 'user',
  };

  return (
    <div>
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
    </div>
  );
};

