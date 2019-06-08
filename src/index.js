import App from "./containers/App";
import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './store/reducers';

const stroe = createStore(allReducers);

ReactDOM.render(<Provider store={ stroe }><App /></Provider>,document.getElementById('app'));