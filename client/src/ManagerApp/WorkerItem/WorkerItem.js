import React from 'react';
import styled from 'styled-components';
import { StyledWorkerItem } from './StyledWorkerItem';

const WorkerItem = ({ worker }) => {
  return (
    <StyledWorkerItem>
      <img
        src={`http://localhost:3000/api/picture/${worker.picture}`}
        alt={worker.name}
      />
      <div className='Item'>
        <div className='Item__info'>
          <h3 className='Item__info-name'>{worker.name}</h3>
          <p>
            <i>
              {worker.position} en {worker.area}
            </i>
          </p>
        </div>
        <div className='Item__info Item__schedule'>
          <p className='Item__info-name'>Horario</p>
          <p>
            {worker.starts} - {worker.ends}
          </p>
        </div>
      </div>
    </StyledWorkerItem>
  );
};

export default WorkerItem;
