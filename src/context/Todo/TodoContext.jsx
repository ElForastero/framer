import React, { useReducer, useEffect, useRef } from 'react';
import browser from 'webextension-polyfill';
import getStubData from './getStubData';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const TOGGLE_DONE = 'TOGGLE_DONE';
export const REMOVE_ALL = 'REMOVE_ALL';
export const INIT = 'INIT';

const TodoContext = React.createContext([]);

const reducer = (state, { payload, type }) => {
  switch (type) {
    case ADD_TODO:
      return [
        {
          id: Math.random()
            .toString(16)
            .substr(2),
          text: payload,
          isDone: false,
          added: new Date().toDateString(),
        },
        ...state,
      ];
    case REMOVE_TODO:
      return state.filter(({ id }) => id !== payload);
    case UPDATE_TODO:
      return state.map(item => {
        if (item.id === payload.id) {
          return { ...item, text: payload.text };
        }

        return item;
      });
    case TOGGLE_DONE:
      return state.map(item => {
        if (item.id === payload) {
          item.isDone = !item.isDone;
        }

        return item;
      });
    case REMOVE_ALL:
      return [];
    case INIT:
      return payload;
    default:
      throw new Error(`No such action: ${type}`);
  }
};

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  const initRef = useRef(false);

  // Sync with storage
  useEffect(() => {
    if (initRef.current) {
      browser.storage.sync.set({ list: state });

      // Update badge counter
      browser.runtime.sendMessage({
        greeting: 'updateBadge',
        text: state.filter(({ isDone }) => !isDone).length.toString(),
      });
    }
  }, [state]);

  // Listen to storage change and update the list
  useEffect(() => {
    browser.storage.onChanged.addListener(changes => {
      if (changes.list) {
        dispatch({ type: INIT, payload: changes.list.newValue });
      }
    });
  }, []);

  // Initialize the list with saved items or with initial data
  useEffect(async () => {
    const { list } = await browser.storage.sync.get({ list: getStubData() });
    dispatch({ type: INIT, payload: list });
    initRef.current = true;
  }, []);

  return <TodoContext.Provider value={[state, dispatch]}>{children}</TodoContext.Provider>;
};

export { TodoProvider, TodoContext };
