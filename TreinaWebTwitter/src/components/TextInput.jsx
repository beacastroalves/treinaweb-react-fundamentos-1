const TextInput = ({placeholder = 'O que está acontecendo?', maxLength = 125, ...props}) => {
  return (
    <div>
      <textarea placeholder={placeholder} maxLength={maxLength} {...props}/>
    </div>
  )
};

export default TextInput;