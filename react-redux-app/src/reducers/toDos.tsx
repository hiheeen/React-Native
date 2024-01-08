interface Action {
  type: string;
  text: string;
}

const toDos = (state = [], action: Action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.text];
    default:
      return state;
  }
};
export const addToDoBy = (text: string) => ({ type: 'ADD_TODO', text });
export default toDos;
