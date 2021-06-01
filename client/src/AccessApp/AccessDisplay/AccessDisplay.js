import React from 'react';
import { StyledAccessDisplay } from './StyledAccessDisplay';
import WorkerInfo from '../WorkerInfo/WorkerInfo';
import Message from '../Message/Message';
import Clock from '../Clock';

const AccessDisplay = ({ worker, showInfo, isValidCard }) => {
  return (
    <StyledAccessDisplay>
      <div className='companie'>Worldwide Board Repair</div>
      {!showInfo && (
        <Message
          className='content'
          state={showInfo}
          message='Acerque su tarjeta'
        />
      )}
      {showInfo && !isValidCard && (
        <Message
          className='content'
          state={showInfo}
          message='Tarjeta no reconocida'
        />
      )}
      {showInfo && isValidCard && (
        <WorkerInfo className='content' worker={worker} />
      )}
      <Clock className='clock' />
    </StyledAccessDisplay>
  );
};

export default AccessDisplay;
