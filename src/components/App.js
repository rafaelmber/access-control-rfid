import React from 'react';
import styled from 'styled-components';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WorkerList from './WorkerList';
import AccessDisplay from './AccessDisplay';

const CssVariables = styled.div`
  --light-blue: #5271ff;
  --dark-blue: #0b185b;
  --white: #fcfeff;
`;

const App = () => {
  const [workers, setWorkers] = useState([]);
  const dispatch = useDispatch();
  const workerList = useSelector((state) => {
    return state.workers;
  });

  useEffect(() => {
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
  }, []);

  return (
    <CssVariables>
      <AccessDisplay />
      {/*<WorkerList workers={workers} />*/}
    </CssVariables>
  );
};

export default App;
