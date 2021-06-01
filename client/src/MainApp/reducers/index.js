const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_WORKER_LIST': {
      const newState = { ...state, workers: action.payload };
      console.log(newState);
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
      return { ...state, workerByCardId: {}, access: false };
    }
    case 'GET_ACCESS_LIST': {
      return { ...state, accessList: action.payload };
    }

    default:
      return { ...state };
  }
};

export default reducer;
