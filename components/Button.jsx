import React from 'react';
import styled from '../styles/Button.module.scss';

// eslint-disable-next-line react/display-name
const Button = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <button ref={ref} className={styled.btn} {...props}>
      {children}
    </button>
  );
});

export default Button;
