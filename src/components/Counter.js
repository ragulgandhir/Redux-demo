import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/actions';

export const Counter = () => {
 
//useSelector hooks extract the value from global state  
const counter = useSelector((state) => state.counterReducer.count);

//useDispatch dispatch the actions 
const dispatch = useDispatch();

const handleIncrement = () => {
    dispatch(increment(10));
  };

  const handleDecrement = () => {
    dispatch(decrement(5));
  };

    return (
        <div>
            <h1>Redux using react app: {counter} </h1>
            <button className='btnStyle' onClick={()=>handleDecrement()}>-</button>
            <button className='btnStyle' onClick={()=>handleIncrement()}>+</button>
        </div>
    );
};
