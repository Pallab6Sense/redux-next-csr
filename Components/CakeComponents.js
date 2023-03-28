import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../Redux';

const Button = props => {
  return <button onClick={() => props.dispatch(buyCake())}>Buy Cake</button>;
};

function CakeComponents() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
      <div>
        <h2>Number of cakes - {numOfCakes}</h2>
        <Button dispatch={dispatch} />
      </div>
  );
}

export default CakeComponents;
