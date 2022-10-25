import styled from '../styles/Button.module.scss';

const Button = ({ children, ...props }) => {
  return (
    <button className={styled.btn} {...props}>
      {children}
    </button>
  );
};

export default Button;
