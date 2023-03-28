import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../Redux';

function CakeComponents() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default CakeComponents;
