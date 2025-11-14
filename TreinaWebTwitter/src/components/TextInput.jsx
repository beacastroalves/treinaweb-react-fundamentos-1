import styles from './TextInput.module.css';

const TextInput = ({placeholder = 'O que está acontecendo?', maxLength = 125, ...props}) => {
  return (
    <div>
      <textarea className={styles.input} placeholder={placeholder} maxLength={maxLength} {...props}/>
    </div>
  )
};

export default TextInput;