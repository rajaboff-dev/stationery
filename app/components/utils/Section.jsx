import React from 'react';
import {twMerge} from "tailwind-merge";

function Section({ className, children, ...props }) {
  return (
    <section className={twMerge('px-5 xl:px-40', className)} {...props}>
      {children}
    </section>
  );
}

export default Section;