import React, { useReducer } from 'react';  

const addbyone = (state, action) => {
  console.log('state', state);
  console.log('action', action);
  return state + action;
};

export const IncrementByOne = () => {
  const [count, setcount] = useReducer(addbyone, 0);

  return (
    <>
      <p>{count}</p>
      <form>
        <button type="button" onClick={() => setcount(2)}>
          Add By 1
        </button>
      </form>
    </>
  );
};