import {render} from "react-dom";
import React from "react";
import { Provider } from 'react-redux';
import { store } from  "./store/store";
import ChatApp from "./component/chatApp";

render(
    <Provider store={store}>
    <ChatApp/>   
    </Provider>,
    document.getElementById('app')
);
