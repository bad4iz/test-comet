export const setCurrentComponent = ({ commit }, {name, id}) => {
  commit('setCurrentComponent',  {name, id});
}

export const increment = ({ dispatch, commit }, id) => {
  commit('increment', id);
}
export const decrement = ({ dispatch, commit }, id) => {
  commit('decrement', id);
}
