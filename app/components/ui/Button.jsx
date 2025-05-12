import React from 'react';
import {twMerge} from "tailwind-merge";

function Button({ children, className, ...props }) {
  return (
    <button className={twMerge('w-full py-[16px] px-[24px] rounded-[12px] text-white border font-medium text-base', className)} {...props}>{children}</button>
  );
}

export default Button;