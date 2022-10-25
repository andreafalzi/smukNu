import styled from '../styles/Header.module.scss';

const GenericHeader = ({ style, title, text, text2 = '' }) => {
  return (
    <header className={styled.header} style={style}>
      <div className={`${styled.container} ${styled.invertedBox}`}>
        <h1>{title}</h1>
        <p>{text}</p>
        <p>{text2}</p>
      </div>
    </header>
  );
};

export default GenericHeader;
