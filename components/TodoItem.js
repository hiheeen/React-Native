import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import DeleteButton from '../assets/delete.svg';
import CheckBoxChecked from '../assets/checkbox-checked.svg';
import CheckBoxUnChecked from '../assets/checkbox-unchecked.svg';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/slices/todo';
const TodoItem = ({ state, text, id }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.itemContainer}>
      <Pressable
        hitSlop={10}
        style={styles.itemCheckbox}
        onPress={() => dispatch(updateTodo(id))}
      >
        {state === 'todo' ? (
          <CheckBoxUnChecked />
        ) : (
          <CheckBoxChecked style={styles.itemCheckboxCheckedIcon} />
        )}
      </Pressable>
      <Text
        style={[styles.itemText, state === 'done' && styles.itemTextChecked]}
      >
        {text}
      </Text>
      <Pressable
        style={[
          styles.deleteButton,
          state === 'done' && styles.deleteButtonDone,
        ]}
        hitSlop={10}
        onPress={() => dispatch(deleteTodo(id))}
      >
        <DeleteButton />
      </Pressable>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#f7f8fa',
  },
  itemCheckbox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
  },
  itemCheckboxCheckedIcon: {
    shadowColor: '#000000',
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  itemText: {
    marginRight: 'auto',
    paddingRight: 25,
    fontSize: 15,
    lineHeight: 20,
    color: '#737373',
  },
  itemTextChecked: {
    opacity: 0.3,
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    opacity: 0.8,
  },
  deleteButtonDone: {
    opacity: 0.3,
  },
});
