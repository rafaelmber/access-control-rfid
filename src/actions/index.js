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

const actions = {
  addWorker,
  getWorker,
  resetWorker,
};
export default actions;
