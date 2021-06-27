import React, { useRef, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {IncrementByOne} from './increment-by-one'

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { id: uuidv4(), name: action.name }];
    case 'remove':
      return state.filter(item => item.id != action.id);
    case 'clear':
      state = [];
      return state;
    default:
      return state;
  }
};

export const ShoppingList = () => {
  const [items, dispatch] = useReducer(reducer, []);
  const inputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    console.log('handle submit', inputRef.current.value);
    dispatch({ type: 'add', name: inputRef.current.value });
    inputRef.current.value = '';
  };

  return (
    <>
    <IncrementByOne />
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
      </form>
      {items.map(item => (
        <li key={item.id}>
          {item.name}{' '}
          <button onClick={() => dispatch({ type: 'remove', id: item.id })}>
            {' '}
            X
          </button>
        </li>
      ))}

      <button onClick={() => dispatch({ type: 'clear' })}>Clear</button>
    </>
  );
};

