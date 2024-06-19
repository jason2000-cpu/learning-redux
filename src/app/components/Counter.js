"use client"

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCount } from '@/lib/features/counter/counterSlice';
import { useAppSelector } from '@/lib/hooks';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useAppSelector(selectCount)
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="text-4xl mb-4">Counter: {count}</div>
      <div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
