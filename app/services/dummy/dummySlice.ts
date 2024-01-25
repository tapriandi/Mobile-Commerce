import { createSlice } from '@reduxjs/toolkit';
import { dummyApi } from './dummyApi';
import { dummyInitialState } from './types';


export const initialState: dummyInitialState = {
};

export const dummySlice = createSlice({
  name: 'dummy',
  initialState,
  reducers: {},
  extraReducers(builder) {
    
  },
});

export const {} = dummySlice.actions;
export default dummySlice.reducer;
