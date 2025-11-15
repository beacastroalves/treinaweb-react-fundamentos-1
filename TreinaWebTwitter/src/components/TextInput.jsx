import { useState } from 'react';
import styles from './TextInput.module.css';

const TextInput = ({placeholder = 'O que está acontecendo?', maxLength = 125, ...props}) => {

  const [text, setText] = useState('');

  const onTextChange = (event) => {
    const text = event.target.value;
    if(text.length <= maxLength) {
      setText(text);
    }
  }

  return (
    <div>
      <textarea
        className={styles.input}
        placeholder={placeholder}
        maxLength={maxLength}
        value={text}
        onChange={onTextChange}
        {...props}
      />
      <p>{text.length} / {maxLength} </p>
    </div>
  )
};

export default TextInput;