import { createStore } from 'redux'

const ACTIONS = {
  SET_TEST: ({ todos, ...state }, { text }) => ({
    test: text,
    ...state
  }),
}

const INITIAL = {
  test: '',
}

export default createStore((state, action) => (
  action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, window.devToolsExtension && window.devToolsExtension())
