import React from 'react';
import {twMerge} from "tailwind-merge";

function Section({ className, children, ...props }) {
  return (
    <section className={twMerge('px-[20px] xl:px-[130px] scroll-mt-[80px]', className)} {...props}>
      {children}
    </section>
  );
}

export default Section;