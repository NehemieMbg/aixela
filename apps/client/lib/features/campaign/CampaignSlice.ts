// notification slice
import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CampaignState {
  isOpen: boolean;
}

// Define the initial state using that type
const initialState: CampaignState = {
  isOpen: false,
};

export const campaignSlice = createSlice({
  name: 'campaign',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openCampaign: (state) => {
      state.isOpen = true;
    },
    closeCampaign: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openCampaign, closeCampaign } = campaignSlice.actions;
export default campaignSlice.reducer;
