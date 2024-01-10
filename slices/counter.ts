import { createAction, createReducer } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}
const initialState: CounterState = { value: 0 };

export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');
export const incrementByAmount = createAction<number>(
  'counter/incrementByAmount'
);
// 액션 생성함수

export const counterReducer = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state) => {
    state.value++;
  });
  builder.addCase(decrement, (state) => {
    state.value--;
  });
  builder.addCase(incrementByAmount, (state, action) => {
    state.value += action.payload;
  });
});
// 액션을 기반으로 하는 리듀서
