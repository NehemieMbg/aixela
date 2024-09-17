import { CurrentUser } from '@/utils/types/authentication';
import { User } from '@/utils/types/temp';
import { createSlice } from '@reduxjs/toolkit';

const initialState: User | CurrentUser = {
  id: 0,
  fullName: '',
  username: '',
  email: '',
  avatarUrl: '',
  title: '',
  location: '',
  isConfirmed: true,
  links: {
    website: '',
    twitter: '',
    instagram: '',
    linkedIn: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    /**
     * Set the user
     * @param state - the current state
     * @param action - the action to be performed
     * @returns the updated
     */
    setUser: (state, action) => {
      return action.payload;
    },

    /**
     * Update the user
     * @param state - the current state
     * @param action - the action to be performed
     * @returns the updated
     */
    updateUser: (state, action) => {
      return { ...state, ...action.payload, avatarUrl: state.avatarUrl };
    },

    /**
     * Update the user avatar
     * @param state - the current state
     * @param action - the action to be performed
     * @returns the updated
     */
    setAvatar: (state, action) => {
      state.avatarUrl = action.payload;
    },
  },
});

export const { setUser, updateUser, setAvatar } = userSlice.actions;
export default userSlice.reducer;
