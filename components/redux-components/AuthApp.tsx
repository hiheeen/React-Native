import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../slices';
import { useDispatch } from 'react-redux';
import { authorize, logout } from '../../slices/auth';
import useUser from '../../hooks/useUser';
import useAuthActions from '../../hooks/useAuthActions';

const AuthStatus = () => {
  const user = useUser();
  // state는 각각의 reducer 가 반환하는 state들로 이루어진 객체이다.
  // user = { id : ~ , username : ~ , displayname : ~ }
  return (
    <View style={styles.status}>
      <Text style={styles.text}>
        {user ? user.displayname : '로그인하세요'}
      </Text>
    </View>
  );
};
const AuthButton = () => {
  // const dispatch = useDispatch();
  const { authorize, logout } = useAuthActions(); // bindActionCreators 반환. 그 안에는 두 함수가 있다!
  // const onPressLogin = () => {
  //   dispatch(
  //     authorize({
  //       id: 1,
  //       username: 'heeen',
  //       displayname: 'hiheeen',
  //     }) // User 타입의 payload객체를 받아서 authorize를 실행시킴. => state.user 를 불변성 유지하며 업데이트 .
  //   );
  // };

  const onPressLogin = () => {
    authorize({
      id: 1,
      username: 'heeen',
      displayname: 'hiheeen',
    });
  };
  // const authorize = (user : User) => (type : 'authorize', payload : user)
  const onPressLogout = () => {
    // dispatch(logout());
    logout();
  };
  return (
    <View>
      <Button title="로그인" onPress={onPressLogin} />
      <Button title="로그아웃" onPress={onPressLogout} />
    </View>
  );
};
const AuthApp = () => {
  return (
    <SafeAreaView style={styles.block}>
      <AuthStatus />
      <AuthButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  status: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 20 },
});
export default AuthApp;
