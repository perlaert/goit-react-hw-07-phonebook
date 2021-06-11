import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import contactsReducer from './phonebook/contacts-reducer';
import logger from 'redux-logger';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

// const phonebookPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

// const persistor = persistStore(store);

export default store;
