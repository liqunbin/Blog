
import types from '../store/types';


export function login(param) {    
  return (dispatch, getState) => {
    //   console.log('rrr',getState)
      dispatch({
          type: types.LOGIN,
          data:param
      })
  }
}

export function editMenber(param) {
  return (dispatch, getState) => {
      dispatch({
          type: types.EDIT_MENBER,
          data:param
      })
  }
}
