import { useDispatch } from 'react-redux';
import { authorize, logout } from '../slices/auth';
import { bindActionCreators } from 'redux';
import { useMemo } from 'react';
const useAuthActions = () => {
  const dispatch = useDispatch();
  return useMemo(
    () => bindActionCreators({ authorize, logout }, dispatch),
    [dispatch]
  );
  // authorize와 logout 액션을 dispatch 함수와 바인딩하는 역할.
  // redux가 제공하는 유틸 함수
};

export default useAuthActions;

// const useAuthActions = () => {
//     const dispatch = useDispatch();
//     return {
//         authorize : (user : User) => dispatch(authorize(user)),
//         logout : () => dispatch(logout())
//     }
// }
// 을 유틸함수로 단축시킨 것.
// dispatch를 함수로 한번 감싸는 작업을 단축시켜주고, 파라미터타입을 일일이 명시해주지 않아도 자동으로 이루어짐.
