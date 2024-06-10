import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from "redux-saga";
import rootReducer from "./rootReducer";
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist'
// import storage from "redux-persist/lib/storage";
import productSaga from "./productSaga";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
      getItem(_key: any) {
          return Promise.resolve(null);
      },
      setItem(_key: any, value: any) {
          return Promise.resolve(value);
      },
      removeItem(_key: any) {
          return Promise.resolve();
      },
  };
};

const storage =
  typeof window !== "undefined"
      ? createWebStorage("local")
      : createNoopStorage();

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer<RootState>(
  persistConfig,
  rootReducer
);

const sagaMiddleWare = createSagaMiddleWare(); //create saga middleware
const middlewares = [sagaMiddleWare]; //create middlewares array to add further middlewares like saga.

export const store = configureStore({
  reducer: persistedReducer,
  // reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(middlewares), // Include default middleware
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(middlewares),
});
sagaMiddleWare.run(productSaga);

// Define RootState type
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

