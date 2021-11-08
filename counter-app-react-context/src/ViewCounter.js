import React from 'react';
import { useCount } from './CountContext'
const ViewCounter = () => {
  const {count} = useCount()
  // set state count from useCount
  return (
    <div>
      {/* change 0 with count from context */}
      {count}
    </div>
  );
}

export default ViewCounter;