import React, { useState, useEffect } from 'react';

const WorkerImage = ({ picture }) => {
  const [isImageReady, setIsImageReady] = useState(false);

  return (
    <img
      src='http://localhost:3000/api/picture/worker-1.jpg'
      alt='image'
      height='200'
      width='200'
    />
  );
};

export default WorkerImage;

/*

useEffect(() => {
  fetch('http://localhost:3000/api/picture/1')
    .then((res) => {
      return res.blob();
    })
    .then((data) => {
      console.log(typeof data);
      setImage(data);
    })
    .catch((err) => {
      console.log('\nHubo un error\n  ' + err, '\n');
    });
}, []);


*/
