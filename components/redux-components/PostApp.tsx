import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { PostState } from '../../api/types';
import { RootState } from '../../redux/slices';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../redux/slices/posts';

const PostApp = () => {
  const posts = useSelector((state: RootState) => state.posts.data); // RootState는 reducer가 반환하는 무언가의 타입을 유츄한 것.
  const dispatch = useDispatch();

  const onPressGetPosts = () => {
    dispatch(fetchPosts() as any);
  };
  return (
    <SafeAreaView style={styles.block}>
      <View style={styles.texts}>
        {posts?.map((post) => (
          <Text style={styles.text}>{post.title.slice(0, 9)}</Text>
        ))}
      </View>

      <Button title="불러오기" onPress={onPressGetPosts} />
    </SafeAreaView>
  );
};

export default PostApp;

const styles = StyleSheet.create({
  texts: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingTop: 3,
    paddingBottom: 3,
  },
  block: {
    flex: 1,
  },
});
