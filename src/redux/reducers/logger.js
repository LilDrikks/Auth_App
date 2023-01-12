import { fetchStarted } from "./aptos"

export const logger = (store) => (next) => (action) => {
  let state = store.getState()
  console.log(state)
  let result = next(action)
  state = store.getState()
  console.log(state)
  return result
}