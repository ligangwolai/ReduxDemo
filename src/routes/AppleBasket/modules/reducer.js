/**
 * Created by songang on 2017/8/18.
 */
import * as types from './constants'

function handleInitApples (state, action) {
  return Object.assign(state, {
    applesList: action.payload,
    pickedApples: [],
    isInit: true
  })
}

function handlePickApple (state, action) {
  let [first, ...rest] = state.applesList
  return Object.assign(state, {
    pickedApples: [...state.pickedApples, first],
    applesList: rest
  })
}

function handleEatApple (state, action) {
  let newPickedApples = state.pickedApples.map((apple) => {
    if (apple.id === action.payload) {
      return Object.assign({}, apple, {
        isEaten: true
      })
    }
    return apple
  })
  return Object.assign(state, {
    pickedApples: newPickedApples
  })
}

function handleRipeingApple (state, action) {
  let newPickedApples = state.pickedApples.map((apple) => {
    if (apple.id === action.payload) {
      return Object.assign({}, apple, {
        color: 'red',
        isRipening: true
      })
    }
    return apple
  })
  return Object.assign(state, {
    pickedApples: newPickedApples
  })
}

function appleReducer (state = {}, action) {
  switch (action.type) {
    case types.INIT_APPLES:
      return handleInitApples(state, action)

    case types.PICK_APPLE:
      return handlePickApple(state, action)

    case types.EAT_APPLE:
      return handleEatApple(state, action)

    case types.RIPENING_APPLE:
      return handleRipeingApple(state, action)

    default:
      return state
  }
}
export default appleReducer
