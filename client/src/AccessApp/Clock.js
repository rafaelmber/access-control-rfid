import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledClock = styled.div`
  color: var(--white);
  padding: 5px 10px;
`;

const Clock = () => {
  const [clock, setClock] = useState('');

  useEffect(() => {
    const clock = setInterval(() => {
      const actualTime = new Date();
      const hour = actualTime.getHours();
      const minute = actualTime.getMinutes();
      const second = actualTime.getSeconds();
      setClock(`Hora ${hour}:${minute}:${second}`);
    }, 1000);
    return () => {
      clearInterval(clock);
    };
  }, [clock]);

  return (
    <StyledClock>
      <div>{clock}</div>
    </StyledClock>
  );
};

export default Clock;
