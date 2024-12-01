import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from './App';
import './css/styles.css';
import { Provider } from "react-redux";
import store from "./redux/Store";

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
    <App />
    </Provider>
);