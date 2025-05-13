import React from 'react';

function Error({ children }) {
  return (
    <p className='text-[12px] text-red-500'>{children}</p>
  );
}

export default Error;