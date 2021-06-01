const addWorker = (payload) => ({
  type: ADD_WORKER_LIST,
  payload,
});
const getWorker = (payload) => ({
  type: GET_WORKER,
  payload,
});
const resetWorker = () => ({
  type: 'RESET_WORKER',
});

const accessList = () => ({
  type: 'GET_ACCESS_LIST',
});

const actions = {
  addWorker,
  getWorker,
  resetWorker,
  accessList,
};
export default actions;
