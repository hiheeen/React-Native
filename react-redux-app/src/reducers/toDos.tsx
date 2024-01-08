import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
interface Action {
  type: string;
  text: string;
}

// const toDos = (state = [], action: Action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [...state, action.text];
//     default:
//       return state;
//   }
// };
// export const addToDoBy = (text: string) => ({ type: 'ADD_TODO', text });
// export default toDos;
const initialState: string[] = [];
const toDosSlice = createSlice({
  name: 'toDos', // state.toDos 로 useSelector에서 접근하여 사용
  initialState, // state 를 타입과 함께 미리 모듈화하여 사용
  reducers: {
    addToDoBy(state, action: PayloadAction<string>) {
      return [...state, action.payload];
    },
  }, // reducer 함수. addToBy = function (state, action) { ~ } ...  을 shorthand method 로서 축약하여 사용
});
export const { addToDoBy } = toDosSlice.actions; // dispatch 에 사용할 함수를 export
export default toDosSlice.reducer; // reducer 함수를 export . toolkit 을 사용하기 전에 선언했던 toDos를 export 하는 것과 같다.
