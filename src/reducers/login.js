import types from '../store/types';
import { reducerCreators } from '../util/index';

const initialState = {
    loading:false
  };

  export default reducerCreators(initialState,{

    [`${types.LOGIN}`]: (state, data, params) => {
        console.log('reducers success')
        return Object.assign({}, state, {

        });
      },
    [`${types.EDIT_MENBER}`]: (state, data, params) => {
      return Object.assign({}, state, {
        info:data
      });
    },

  })