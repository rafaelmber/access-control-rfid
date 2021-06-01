import React from 'react';
import { StyledMessage } from './StyledMessage';
const Message = ({ state, message }) => {
  return <StyledMessage state={state}>{message}</StyledMessage>;
};
export default Message;
