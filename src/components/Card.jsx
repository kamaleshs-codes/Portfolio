import React from "react";

export const Card = ({ children }) => {
  return (
    <div className='w-full glass-card p-6'>
      {children}
    </div>
  );
};
