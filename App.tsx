import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';
import { createStore } from 'redux';
import rootReducer from './slices/index';

import AuthApp from './components/redux-components/AuthApp';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import PostApp from './components/redux-components/PostApp';
import Counter from './redux-toolkit/Counter';
const store = configureStore({ reducer: rootReducer }); // configureStore에는 thunk가 내장되어 있다.
export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      {/* <AuthApp /> */}
      {/* <PostApp /> */}
      <Counter />
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
