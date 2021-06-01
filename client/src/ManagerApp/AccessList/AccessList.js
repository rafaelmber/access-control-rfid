import React, { useState, useEffect } from 'react';
import AccessItem from '../AccessItem/AccessItem';
import { StyledAccessList } from './StyledAccessList';

function AccessList({ accessList }) {
  return (
    <StyledAccessList>
      <div className='header'>
        <span>Fecha ingreso</span>
        <span>Identificación</span>
        <span>Nombre</span>
        <span>Mensaje</span>
      </div>
      {accessList.map((accessInfo) => {
        return <AccessItem key={accessInfo.access_id} {...accessInfo} />;
      })}
    </StyledAccessList>
  );
}
export default AccessList;
