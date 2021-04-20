import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import WorkerInfo from './WorkerInfo';
import io from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
const SyledAccessDisplay = styled.div`
  background-color: var(--light-blue);
  width: 600px;
  height: 600px;
  display: grid;
  grid-template-rows: 100px 470px 30px;
  grid-template-columns: 1fr;
  grid-template-areas: 'companie-area' 'content-area' 'clock-area';

  justify-content: center;
  align-items: center;
  .companie {
    grid-area: companie-area;
    font-family: 'Open sans', 'sans serif';
    font-weight: bold;
    color: var(--white);
    font-size: 2.8rem;
    text-align: center;

    /*border: 1px solid red;*/
  }
  .content {
    grid-area: content-area;
  }
  .clock {
    padding: 0 10px;
    grid-area: clock-area;
  }
  .start {
    grid-area: content-area;
    font-size: 3rem;
    color: var(--white);
    text-align: center;
  }
  .warning {
    grid-area: content-area;
    font-size: 5rem;
    font-weight: bold;
    color: red;
    text-align: center;
  }
`;

const socket = io();

const AccessDisplay = () => {
  const [clock, setClock] = useState('');
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
  }, []);

  useEffect(() => {
    socket.on('closed', () => {
      setIsValidCard(false);
      setShowInfo(false);
      setWorker({});
    });
  }, []);

  useEffect(() => {
    setInterval(() => {
      const actualTime = new Date();
      const hour = actualTime.getHours();
      const minute = actualTime.getMinutes();
      const second = actualTime.getSeconds();
      setClock(`Hora ${hour}:${minute}:${second}`);
    }, 1000);
  }, [clock]);

  return (
    <SyledAccessDisplay>
      <div className='companie'>Worldwide Board Repair</div>
      {!showInfo && <div className='start'>Acerque su tarjeta</div>}
      {showInfo && !isValidCard && (
        <div className='warning'>Tarjeta no reconocida </div>
      )}
      {showInfo && isValidCard && (
        <WorkerInfo className='content' worker={worker} />
      )}
      <div className='clock'>{clock}</div>
    </SyledAccessDisplay>
  );
};

export default AccessDisplay;
