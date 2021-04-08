import React from 'react';
import styled from 'styled-components';

const StyledWorkerItem = styled.div`
  border: 1px solid green;
`;

const WorkerItem = ({ worker }) => {
  return (
    <StyledWorkerItem>
      <div>Worker item {worker.name}</div>
    </StyledWorkerItem>
  );
};

export default WorkerItem;
