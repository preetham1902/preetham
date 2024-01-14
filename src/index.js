//import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import stores from './store/configureStore';
import Route from './Route';

const el=document.getElementById('root');


const root=ReactDOM.createRoot(el);

console.log(stores.store);
root.render(
    <Provider store={stores.store}>
        <PersistGate loading={null} persistor={stores.persistor}>
            <Route />
        </PersistGate>
    </Provider>
)