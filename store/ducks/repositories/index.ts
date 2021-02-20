import { Reducer } from 'redux';
import { RepositoriesState, RepositoriesTypes } from './types';

const INITIAL_STATE: RepositoriesState ={
  data: [],
  error: false,
  loading: false,
}

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case RepositoriesTypes.LOAD_REQUEST:
      console.log('entrou no load request');
      return {...state, loading: true};
    case RepositoriesTypes.LOAD_SUCCES:
      console.log('entrou no load succes');
          return {
        ...state, loading: false, error: false, data: action.payload.data
      };
    case RepositoriesTypes.LOAD_FAILURE:
      console.log('entrou no load failure');
          return {
            ...state, loading: false, error: true, data: []
          };
    default:
          return state;
  }
};

export default reducer;