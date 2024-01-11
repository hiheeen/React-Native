import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';
import AuthApp from './components/redux-components/AuthApp';
import { Provider } from 'react-redux';
import PostApp from './components/redux-components/PostApp';
import Counter from './redux-toolkit/Counter';
import store from './redux/store';

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
