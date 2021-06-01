import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WorkerItem from '../WorkerItem/WorkerItem';

const StyledWorkerManager = styled.div`
  height: 100%;
  padding: 20px 10px;
  .button {
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    background-color: var(--dark-blue);
    text-decoration: none;
    color: var(--white);
    &:hover {
      cursor: pointer;
    }
  }
`;

const WorkerManager = ({ workerList }) => {
  return (
    <StyledWorkerManager>
      <div>
        <Link className='button' to='/app/workers/add'>
          Añadir trabajador
        </Link>
      </div>
      {workerList.map((worker) => {
        return <WorkerItem worker={worker} key={worker.worker_id} />;
      })}
    </StyledWorkerManager>
  );
};
export default WorkerManager;
