import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import WorkerList from '../../ManagerApp/WorkerList/WorkerListContainer';
import AccessDisplay from '../../AccessApp/AccessDisplay/AccessDisplayContainer';
import { StyledMainDisplay } from './StyledMainDisplay';
import AccessList from '../../ManagerApp/AccessList/AccessListContainer';
import AddWorker from '../../ManagerApp/AddWorker/AddWorkerContainer';

const ManagerDisplay = () => {
  return (
    <StyledMainDisplay>
      <NavBar className='navbar' />
      <Switch className='container'>
        <Route exact path='/app/workers' component={WorkerList} />
        <Route exact path='/app/workers/add' component={AddWorker} />
        <Route exact path='/app/access' component={AccessList} />
        <Route exact path='/app' component={AccessDisplay} />
        <Route>
          <Redirect to='/app' />
        </Route>
      </Switch>
    </StyledMainDisplay>
  );
};

export default ManagerDisplay;
