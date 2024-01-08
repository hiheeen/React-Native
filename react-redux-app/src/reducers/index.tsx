import { combineReducers } from 'redux';
import counter from './counter';
import toDos from './toDos';

const rootReducer = combineReducers({
  counter,
  toDos,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
