import {
  createAction,
  createReducer,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import axios from 'axios';

interface CounterState {
  value: number;
  error: any;
}
const initialState: CounterState = { value: 0, error: null };

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
// 생성된 액션을 기반으로 하는 리듀서

export const getCounter = createAsyncThunk(
  'counter/getCounter',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
// 미들웨어 (액션이 객체가 아닌 비동기 함수일 때, 반환받은 프로미스를 기반으로 새로운 액션 타입을 생성해준다)

const counterSLice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCounter.pending, (state) => state);
    builder.addCase(getCounter.fulfilled, (state) => state);
    builder.addCase(
      getCounter.rejected,
      (state, action) => (state.error = action.payload as any)
    );
  }, // 새롭게 생성되어 외부에서 들어오는 액션을 기반으로 하는 리듀서
});
export default counterSLice.reducer;
