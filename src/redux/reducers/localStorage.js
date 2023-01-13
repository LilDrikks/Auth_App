import { getAptos } from "./aptos"

const localStorage = (store) => (next) => async (action) => {
  let state = store.getState()
  let result = next(action)
  state = store.getState()
  if(state.signIn.meta.localStorage.value) {
    const {key, value} = state.signIn.meta.localStorage
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  return result
}

export default localStorage;