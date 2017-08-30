import * as types from './constants'
import { getApples } from './apis'

export function initApples () {
  return function (dispatch, getState) {
    return getApples().then((res) => {
      dispatch({
        type: types.INIT_APPLES,
        payload : res
      })
    })
  }
}

export function pickApple () {
  return function (dispatch, getState) {
    dispatch({
      type: types.PICK_APPLE,
    })
  }
}

export function eatApple (appleId) {
  return function (dispatch, getState) {
    dispatch({
      type: types.EAT_APPLE,
      payload: appleId
    })
  }
}

export function ripeningApple (appleId) {
  return function (dispatch, getState) {
    dispatch({
      type: types.RIPENING_APPLE,
      payload: appleId
    })
  }
}
