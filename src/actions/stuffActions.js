import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import * as stuffActions from '../../actions/stuffActions';
//import PropTypes from 'prop-types';
//import React from 'react';

import * as types from './actionTypes';

function url() {
  return 'www.url.com';
}

export function receiveStuff(json) {
  return {type: types.RECEIVE_STUFF, stuff: json.stuff};
}

export function fetchStuff() {
  return dispatch => {
    return fetch(url(), {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => dispatch(receiveStuff(json)));
  };
}
// 'x-api-key': apiKey,
