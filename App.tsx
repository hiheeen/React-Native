import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';
import AuthApp from './components/redux-components/AuthApp';
import { Provider } from 'react-redux';
import PostApp from './components/redux-components/PostApp';
import Counter from './redux-toolkit/Counter';
import store from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import app from './firebase';
import { firebaseConfig } from './firebase';
import { initializeApp } from 'firebase/app';
import Toast from 'react-native-toast-message';

export default function App(): JSX.Element {
  initializeApp(firebaseConfig); // firebase 설정으로 초기화
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }} // 기본값은 true, 헤더가 표시되고 name이 헤더에 표시됨
            name="Main"
            component={MainScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <AuthApp /> */}
      {/* <PostApp /> */}
      <Toast />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
