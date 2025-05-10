import React from 'react';
import {twMerge} from "tailwind-merge";

function Section({ className, children }) {
  return (
    <div className={twMerge('px-5 xl:px-40', className)}>
      {children}
    </div>
  );
}

export default Section;