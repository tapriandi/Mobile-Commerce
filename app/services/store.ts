import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { 
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistStore,
} from "redux-persist";
import { dummyApi } from "./dummy/dummyApi";
import persistedReducer from './persist';

export const store = configureStore({
    reducer: {
        persistedReducer,
        [dummyApi.reducerPath]: dummyApi.reducer,
    },
    middleware: defaultMiddleware => 
        defaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        })
        .concat(dummyApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// persistor
export const persistor = persistStore(store);
