const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_WORKER_LIST': {
      const newState = { ...state, workers: action.payload };
      return newState;
    }
    case 'GET_WORKER': {
      const workersByCard = state.workers.filter((worker) => {
        return worker.card_id === action.payload;
      });
      let access = false;
      if (workersByCard[0]) {
        access = true;
      }
      const newState = {
        ...state,
        workerByCardId: workersByCard[0],
        access: access,
      };

      return newState;
    }
    case 'RESET_WORKER': {
      console.log('Reset...');
      return { ...state, workerByCardId: {}, access: false };
    }
    default:
      return { ...state };
  }
};

export default reducer;
