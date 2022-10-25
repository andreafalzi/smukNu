import styled from '../styles/Input.module.scss';

const Input = ({ labelName, ...otherProps }) => {
  return (
    <div className={styled.inputGroup}>
      <label htmlFor={labelName} className={styled.label}>
        {labelName}
      </label>
      <input {...otherProps} className={styled.input} />
    </div>
  );
};

export default Input;
