import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices';

const store = configureStore({
  reducer: rootReducer,
});
// configureStore에는 thunk가 내장되어 있다.
// createStore 할 때에는 middleware를 따로 등록해줘야 했지만 configureStore에선 안해도 됨.
export default store;
