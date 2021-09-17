import React, { useReducer } from 'react';
import {initState, reducer} from './reducer';

export const Context = React.createContext({});

export function ConfigContext({children}) {

  const [state, dispatch] = useReducer(reducer, initState);
  const getValue = (key) => state[key];
  const setValue = (key, value ) => {
    return dispatch({type: 'SET_VALUE', key, value });
  }

  let ctx = {
    state,
    dispatch,
    getValue,
    setValue,
  };
  return <Context.Provider value={ctx} >{children}</Context.Provider>
}

