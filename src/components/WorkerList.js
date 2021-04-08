import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import WorkerItem from './WorkerItem';

const StyledWorkerList = styled.div`
  border: 1px solid red;
`;

const WorkerList = ({ workers }) => {
  const [workerList, serWorkerLsit] = useState(workers);

  serWorkerLsit([
    { name: 'jaime', worker_id: 1 },
    { name: 'jose', worker_id: 2 },
    { name: 'jralu', worker_id: 3 },
  ]);
  jes;

  return (
    <StyledWorkerList>
      {workerList.map((worker) => {
        <WorkerItem worker={worker} key={worker.worker_id} />;
      })}
    </StyledWorkerList>
  );
};

export default WorkerList;
