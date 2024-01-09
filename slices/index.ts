import { combineReducers } from 'redux';
import auth from './auth';
const rootReducer = combineReducers({
  auth,
});

// rootReducer 함수의 반환값 타입을 RootState type alias로 지정
// => ReturnType은 특정 함수의 반환값 타입을 가져오는 유틸 타입이다.
// 이 타입의 제네릭에 <typeof 함수명>을 넣으면 해당 함수의 반환값 타입을 조회할 수 있다.
export type RootState = ReturnType<typeof rootReducer>;

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
} // => 이 로직을 작성하면 useSelector을 사용할 때 state 타입을 RootState로 일일이 작성하지 않아도 된다...왜?
// chatGPT가 말하길, 해당 파일(아마도 이 파일)에서만 유효하고 또한 개발할 때 RootState를 명시해주는 것이 협업하기 더 좋다고 함.
export default rootReducer;
