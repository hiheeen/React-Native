import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  username: string;
  displayname: string;
}
interface AuthState {
  user: User | null;
}

const initialState: AuthState = { user: null };

const authState = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorize(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    logout(state) {
      // 업데이트 하는 과정에서 action을 사용하지 않으면 생략 가능
      state.user = null;
    },
  },
});

export default authState.reducer;
export const { authorize, logout } = authState.actions;
