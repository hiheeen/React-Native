import { useSelector } from 'react-redux';
import { RootState } from '../slices';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../slices/counter';
import { Button, SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();

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
