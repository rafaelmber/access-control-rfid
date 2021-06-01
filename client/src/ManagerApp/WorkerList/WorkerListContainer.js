import React, { useEffect } from 'react';
import WorkerList from './WorkerList';
import { useDispatch, useSelector } from 'react-redux';

const WorkerListContainer = () => {
  const dispatch = useDispatch();

  const workerList = useSelector((state) => {
    return state.workers;
  });

  useEffect(() => {
    console.log(workerList);
    fetch('http://localhost:3000/api/worker')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({
          type: 'ADD_WORKER_LIST',
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return <WorkerList workerList={workerList} />;
};
export default WorkerListContainer;
