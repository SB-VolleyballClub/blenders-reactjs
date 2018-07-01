import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';
import BlendersTourn from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BlendersTourn pools={ 2 } teamsPerPool={ 5 }/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

// <Provider store={store}>
// </Provider>,


// <BlendersTourn pools={ 2 } teamsPerPool={ 5 }/>,
// document.getElementById('root')
