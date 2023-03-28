import { buyIceCream } from '@/Redux';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Button = props => {
  return (
    <button
      onClick={() => {
        props.dispatch(buyIceCream());
      }}
    >
      Buy IceCream
    </button>
  );
};

function IceCreamComponents() {
    let numOfIceCreams;
    numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
    
    const dispatch = useDispatch();
    return (
        <div>
          <h2>Number of IceCreams - {numOfIceCreams}</h2>
          <Button dispatch={dispatch} />
        </div>
    );
}

export default IceCreamComponents;
