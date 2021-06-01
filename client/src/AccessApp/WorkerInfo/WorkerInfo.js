import React, { useState, useEffect } from 'react';
import { StyledWorkerInfo } from './StyledWorkerInfo';
const WorkerInfo = ({ worker }) => {
  //const [isWorkerReady, setWorkerReady] = useState(t);

  return (
    <StyledWorkerInfo>
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
          <div className='message'>{worker.message}</div>
        </>
      )}
    </StyledWorkerInfo>
  );
};
export default WorkerInfo;
