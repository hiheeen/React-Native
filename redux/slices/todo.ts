import { createSlice } from '@reduxjs/toolkit';
interface Todo {
  id: number;
  text: string;
  state: string;
}
interface TodoState {
  currentId: number;
  todos: Todo[];
}
const initialState: TodoState = {
  currentId: 4,
  todos: [],
};
const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: state.currentId++,
        text: action.payload.trim(),
        state: 'todo',
      });
    },
    updateTodo: (state, action) => {
      const item = state.todos.findIndex((item) => item.id === action.payload);
      state.todos[item].state =
        state.todos[item].state === 'todo' ? 'done' : 'todo';
      state.todos.push(state.todos.splice(item, 1)[0]);
      // 여기서 splice(item,1) 은 item 인덱스를 가진 todos배열안의 요소를 제거하고, 제거된 요소를 포함한 배열을 반환한다.
      // 반환된 배열의 0번째 인덱스는 결국 제거한 요소 이기 때문에 todos배열에 새로 넣어주는 것. todos의 끝에 추가됨.
    },
    deleteTodo: (state, action) => {
      const item = state.todos.findIndex((item) => item.id === action.payload);
      if (item > -1) {
        state.todos.splice(item, 1); // todos 배열안에 있는 todo 객체에서 내가 payload로 집어넣은 id가 있는걸 찾는데,
        // 없으면 -1을 반환하므로 유효한 인덱스가 나올때만 실행. 그 요소를 지워줌.
      }
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
