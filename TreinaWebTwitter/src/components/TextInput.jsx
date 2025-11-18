// import { useState } from 'react';
import styles from './TextInput.module.css';

const TextInput = (props) => {


  return (
    <div>
      <textarea
        className={styles.input}
        {...props}
      />
    </div>
  )
};

export default TextInput;