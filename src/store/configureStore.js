import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';
import RootReducer from '../reducers/rootReducer';


const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, RootReducer);

export default () => {
    const store = configureStore({
        reducer: persistedReducer
    });
    const persistor = persistStore(store);
    return { store, persistor };
}