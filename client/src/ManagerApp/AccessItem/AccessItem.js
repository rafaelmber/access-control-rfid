import React from 'react';
import { StyledAccessItem } from './StyledAccessItem';

function AccessItem(props) {
  return (
    <StyledAccessItem>
      <span>{new Date(props.createdAt).toLocaleString()}</span>
      <span>{props.Worker.worker_id}</span>
      <span>{props.Worker.name}</span>
      <span>{props.message}</span>
    </StyledAccessItem>
  );
}

export default AccessItem;
