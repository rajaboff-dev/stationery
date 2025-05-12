import React from 'react';
import {twMerge} from "tailwind-merge";

function Button({ children, className, ...props }) {
  return (
    <button className={twMerge('w-full py-3 rounded-lg text-white', className)} {...props}>{children}</button>
  );
}

export default Button;