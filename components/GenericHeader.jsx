import styled from '../styles/Header.module.scss';

const BOX_STYLE_CLASSES = {
  primaryBox: 'primaryBox',
  invertedBox: 'invertedBox',
  transparentBox: 'transparentBox',
};

const GenericHeader = ({ style, title, text, text2 = '', boxStyle = 'primaryBox' }) => {
  return (
    <header className={styled.header} style={style}>
      <div className={`${styled.container} ${styled[BOX_STYLE_CLASSES[boxStyle]]}`}>
        <h1>{title}</h1>
        <p>{text}</p>
        <p>{text2}</p>
      </div>
    </header>
  );
};

export default GenericHeader;
