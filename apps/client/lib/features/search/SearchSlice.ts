// notification slice
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

// Define a type for the slice state
interface SearchState {
  isOpen: boolean;
}

// Define the initial state using that type
const initialState: SearchState = {
  isOpen: false,
};

export const searchSlice = createSlice({
  name: 'search',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openSearch: (state) => {
      state.isOpen = true;
    },
    closeSearch: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openSearch, closeSearch } = searchSlice.actions;
export default searchSlice.reducer;
