import React, { useState, useEffect } from 'react';
import AccessDisplay from './AccessDisplay';
import io from 'socket.io-client';

const socket = io();

const AccessDisplayContainer = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [isValidCard, setIsValidCard] = useState(false);
  const [worker, setWorker] = useState({});

  //Trabajador detectado
  useEffect(() => {
    socket.on('worker', (response) => {
      const res = JSON.parse(response);
      if (res) {
        console.log('IS inside');
        setWorker(res);
        setIsValidCard(true);
      }
      setShowInfo(true);
    });
    return () => {
      socket.removeAllListeners('worker');
    };
  }, []);

  useEffect(() => {
    socket.on('closed', () => {
      setIsValidCard(false);
      setShowInfo(false);
      setWorker({});
    });
    return () => {
      socket.removeAllListeners('closed');
    };
  }, []);
  return (
    <AccessDisplay
      worker={worker}
      showInfo={showInfo}
      isValidCard={isValidCard}
    />
  );
};
export default AccessDisplayContainer;
