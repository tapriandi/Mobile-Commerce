import { createSlice } from '@reduxjs/toolkit';

interface initState {
  mode: string;
}

export const initialState: initState = {
  mode: '',
};

export const landingSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    setMode: (state: initState, actions) => {
      state.mode = actions.payload;
    },
  },
});

export const { setMode } = landingSlice.actions;
export default landingSlice.reducer;
