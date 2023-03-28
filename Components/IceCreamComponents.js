import { buyIceCream } from '@/Redux';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function IceCreamComponents() {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of IceCreams - {numOfIceCreams}</h2>
      <button
        onClick={() => {
          dispatch(buyIceCream());
        }}
      >
        Buy IceCream
      </button>
    </div>
  );
}

export default IceCreamComponents;
