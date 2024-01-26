import { RootState } from '../store';

export const landingSelectors = {
  modeState: (state: RootState) => state.persistedReducer.landing.mode,
};
