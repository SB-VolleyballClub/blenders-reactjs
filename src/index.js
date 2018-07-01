import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BlendersTourn from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BlendersTourn pools={ 2 } teamsPerPool={ 5 }/>, document.getElementById('root'));
registerServiceWorker();
