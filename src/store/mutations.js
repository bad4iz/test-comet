export const setCurrentComponent = (state, {name, id}) => {
  state.currentId = id;
  state.currentComponent = name.toLowerCase() + '-form';
}

// state.count++
export const increment = (state, id) => {
  // тут свернул и сделал имутабле
  // закометить
  state.list = {...state.list, [id]:{...state.list[id], score:state.list[id].score+1}};
  // вот как все просто без имутабле
  // раскометить
  // state.list[id].score++;

}
export const decrement = (state, id) => {
  // тут свернул тоже и сделал имутабле
  // закометить
  state.list = {...state.list, [id]:{...state.list[id], score:state.list[id].score-1}};
  // вот как все просто без имутабле
  // раскометить
  // state.list[id].score++;

}
