import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../Redux';

function NewCakeComponents() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const [number, setNumber] = useState(1);
  const dispatch = useDispatch(number);
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(number))}>
        Buy {number} Cake
      </button>
    </div>
  );
}

export default NewCakeComponents;
