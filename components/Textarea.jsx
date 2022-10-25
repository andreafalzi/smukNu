import styled from '../styles/Textarea.module.scss';

const Textarea = ({ labelName, ...otherProps }) => {
  return (
    <div className={styled.textareaGroup}>
      <label htmlFor={labelName} className={styled.label}>
        {labelName}
      </label>
      <textarea {...otherProps} className={styled.textarea} />
    </div>
  );
};

export default Textarea;
