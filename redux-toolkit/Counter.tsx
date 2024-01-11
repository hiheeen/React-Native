import { createReducer, createAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/slices';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/slices/counter';
import { Button, SafeAreaView } from 'react-native';
import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
const count = useSelector((state: RootState) => state.counter.value);

// authorize와 logout 액션을 dispatch 함수와 바인딩하는 역할.
// redux가 제공하는 유틸 함수
const dispatch = useDispatch();
const Counter = () => {
  return (
    <SafeAreaView style={styles.block}>
      <View style={styles.view}>
        <Text>{count}</Text>
        <Button title="+" onPress={() => dispatch(increment())} />
        <Button title="-" onPress={() => dispatch(decrement())} />
      </View>
    </SafeAreaView>
  );
};
export default Counter;
const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
