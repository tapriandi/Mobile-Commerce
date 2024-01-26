import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, Reducer } from '@reduxjs/toolkit';
import { persistReducer, WebStorage } from 'redux-persist';
import { dummySlice } from './dummy/dummySlice';
import { dummyInitialState } from './dummy/types';
import { landingSlice } from './landing/landingSlice';

interface IPersistConfig {
  key: string;
  version: number;
  storage: WebStorage;
}

interface IRootState {
  dummy: dummyInitialState;
  landing: string;
}

const persistConfig: IPersistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

// persist reducer
const combinedReducer = combineReducers<IRootState, any>({
  [dummySlice.name]: dummySlice.reducer,
  [landingSlice.name]: landingSlice.reducer,
});

const rootReducer: Reducer = (state: IRootState, action: any) => {
  return combinedReducer(state, action);
};

type RootReducer = ReturnType<typeof rootReducer>;
const persistedReducer = persistReducer<RootReducer>(
  persistConfig,
  rootReducer,
);

export default persistedReducer;
