import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyleInfoWorker = styled.div`
  box-sizing: border-box;
  display: grid;
  /*height: 600;*/
  grid-template-columns: 200px 300px;
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    'picture name'
    'picture worker_id'
    'picture position'
    'card_id input'
    'nada output'
    'message message';
  grid-gap: 20px 30px;
  justify-content: center;
  align-items: center;
  font-family: 'Lato', 'sans serif';
  font-size: 1rem;
  color: var(--dark-blue);
  padding: 10px;

  /*border: 3px solid black;*/

  .info {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 4fr;
    align-items: center;
    color: var(--white);
  }
  .text_data {
    color: var(--dark-blue);
    border: 3px solid var(--white);
    padding: 8px 3px;
    margin-left: 5px;
    text-align: left;
    background-color: #788ce6;
    width: 100%;
    box-sizing: border-box;
  }
  .picture {
    grid-area: picture;
    height: 200px;
    border: 3px solid var(--white);
  }
  .name {
    grid-area: name;
  }
  .worker_id {
    grid-area: worker_id;
  }
  .input {
    grid-area: input;
  }
  .output {
    grid-area: output;
  }
  .card_id {
    grid-area: card_id;
  }
  .message {
    justify-self: center;
    align-self: center;
    grid-area: message;
    font-size: 2rem;
  }
`;

const WorkerInfo = ({ worker }) => {
  //const [isWorkerReady, setWorkerReady] = useState(t);

  return (
    <StyleInfoWorker>
      {worker && (
        <>
          <img
            src={`http://localhost:3000/api/picture/${worker.picture}`}
            alt={`picture ${worker.picture}`}
            className='picture'
          />
          <div className='name info'>
            Nombre:
            <div className='text_data'>{worker.name}</div>
          </div>

          <div className='worker_id info'>
            Id:
            <div className='text_data'>{worker.worker_id}</div>
          </div>
          <div className='postion info'>
            Posicion:
            <div className='text_data'>
              {worker.position} en {worker.area}
            </div>
          </div>
          <div className='input info'>
            Entrada:
            <div className='text_data'>{worker.starts}</div>
          </div>
          <div className='output info'>
            Salida:
            <div className='text_data'>{worker.ends}</div>
          </div>
          <div className='card_id info'>
            Card:
            <div className='text_data'>{worker.card_id}</div>
          </div>
          <div className='message'>Tarde</div>
        </>
      )}
    </StyleInfoWorker>
  );
};
export default WorkerInfo;
