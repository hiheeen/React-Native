import { useSelector } from 'react-redux';
import { RootState } from '../redux/slices';

// useSelector을 훅으로 분리. 재사용성 높임. return 으로 state를 받음. 단순 useSelector의 기능을 하는 함수 useUser을 생성한 것.
// 모듈화 시키기 위해 한번 함수로 감싸준 것 뿐이다!!
const useUser = () => {
  return useSelector((state: RootState) => state.auth.user); // => null 혹은 User 타입의 객체가 들어온다.
};

export default useUser;
