import { UserInfo } from '@components/Auth/types';
import { RootState } from '@redux/store';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  userInfo: UserInfo | null;
}

const initialState: AuthState = {
  userInfo: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<UserInfo | null>) => {
      if (payload) {
        state.userInfo = { ...payload };
        console.log(state.userInfo);
      } else {
        state.userInfo = null;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
