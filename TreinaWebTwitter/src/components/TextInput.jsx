import { useRef } from 'react';
import styles from './TextInput.module.css';

const TextInput = ({placeholder = 'O que está acontecendo?', maxLength = 125, ...props}) => {

  // const [text, setText] = useState('');

  const inputElement = useRef();

  // const onTextChange = (event) => {
  //   const text = event.target.value;
  //   if(text.length <= maxLength) {
  //     setText(text);
  //   }
  // }

  return (
    <div>
      <textarea
        ref={inputElement}
        className={styles.input}
        placeholder={placeholder}
        maxLength={maxLength}
        defaultValue={"digite aqui"}
        {...props}
      />
      <p>{10} / {maxLength} </p>
      <button onClick={() => {console.log(inputElement.current.value)}}>Enviar</button>
    </div>
  )
};

export default TextInput;