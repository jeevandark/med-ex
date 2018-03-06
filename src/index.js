import React from 'react';
import { render } from 'react-dom';
import { router } from './router';
import { store } from './store';
import { Provider } from "react-redux";
import registerServiceWorker from './registerServiceWorker';

render((
    <Provider store={store}>
        {router}
    </Provider>
), document.getElementById('app'));

registerServiceWorker();
