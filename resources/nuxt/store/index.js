export const state = () => ({
  subscribeStatus: 'event',
  subscribeStep: false,
  user: false
})

export const mutations = {
  subscribeStatus(state, status) {
    state.subscribeStatus = status
  },
  subscribeStep(state, status) {
    state.subscribeStep = status
  },
  userAuth(state, status) {
    state.user = status
  }
}
