import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AccessList from './AccessList';
function AccessListContainer() {
  const dispatch = useDispatch();
  const accessList = useSelector((state) => {
    return state.accessList;
  });

  useEffect(() => {
    fetch('/api/access/')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({
          type: 'GET_ACCESS_LIST',
          payload: data.reverse(),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return <AccessList accessList={accessList} />;
}

export default AccessListContainer;
