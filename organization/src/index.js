import {render} from "react-dom";
import React from "react";
import { Provider } from 'react-redux';
import { store } from  "./store/store";
import ReduxOrganization from "./component/ReduxOrganization";
render(
    <Provider store={store}>
       <ReduxOrganization/>
    </Provider>,
    document.getElementById('app')
);
