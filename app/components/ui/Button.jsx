import React from 'react';
import {twMerge} from "tailwind-merge";

function Button({ children, className }) {
  return (
    <button className={twMerge('w-full py-3 rounded-lg text-white', className)}>{children}</button>
  );
}

export default Button;