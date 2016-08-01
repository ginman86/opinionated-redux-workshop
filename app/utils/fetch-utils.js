import fetch from 'isomorphic-fetch';

import { generateActionStatusTypes } from './status-types';

export const fetchUrl = (url, dispatch, baseActionType) => {
  dispatch({
    type: generateActionStatusTypes(baseActionType)
  });

  return fetch(url).then((response) => {
    return response.json().then((data) => {
      dispatch({
        type: generateActionStatusTypes(baseActionType, response.status),
        payload: data
      })
    });
  });
};
