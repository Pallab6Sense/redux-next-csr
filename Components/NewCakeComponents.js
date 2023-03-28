import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../Redux';

function Button(props) {
  return (
    <button onClick={() => props.dispatch(buyCake(props.number))}>
      Buy {props.number} Cake
    </button>
  );
}

function CakeInput(props) {
  return (
    <input
      type="text"
      value={props.number}
      onChange={(e) => props.setNumber(e.target.value)}
    />
  );
}

function NewCakeComponents() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const [number, setNumber] = useState(1);
  const dispatch = useDispatch(number);
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <CakeInput number={number} setNumber={setNumber} />
      <Button number={number} dispatch={dispatch} />
    </div>
  );
}

export default NewCakeComponents;
