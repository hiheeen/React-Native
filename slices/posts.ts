import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getPosts from '../api/getPosts';
import { PayloadAction } from '@reduxjs/toolkit';
import { Post, PostState } from '../api/types';
export const fetchPosts = createAsyncThunk<Post[]>(
  'posts/fetchPosts',
  getPosts
);

const initialState: PostState = {
  loading: 'welcome',
  data: null,
  error: null,
};
const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = 'loading';
    });
    builder.addCase(
      fetchPosts.fulfilled,
      (state, action: PayloadAction<Post[]>) => {
        state.loading = 'success';
        state.data = action.payload;
      }
    );
    builder.addCase(
      fetchPosts.rejected,
      (state, action: ReturnType<typeof fetchPosts.rejected>) => {
        state.loading = 'fail';
        state.error = new Error(action.error.message);
      }
    );
  },
});
export default postSlice.reducer;
// 원래 reducers 에서는 const { action 이름 함수 } = postSlice.actions 해서 export 한 다음 dispatch에 넣어 사용한다.
