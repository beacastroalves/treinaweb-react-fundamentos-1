import { useState } from "react";
import TextInput from "../components/TextInput";

const Index = () => {

  const [text, setText] = useState('');
  const [tweetList, setTweetList] = useState([]);

  const maxLength = 125;

  const onTextChange = (event) => {
    const text = event.target.value;
    if(text.length <= maxLength) {
      setText(text);
    }
  };

  const sendTweet = () => {
    setTweetList([...tweetList, text]);
  };

  return (
    <div>
      <h1>TreinaWebTweet</h1>
      <div>
        <img src="https://github.com/beacastroalves.png" />
        <TextInput
          placeholder={'O que está acontecendo?'}
          maxLength={maxLength}
          value={text}
          onChange={onTextChange}
        />
      </div>
      <div>
        <div>{text.length} / {maxLength}</div>
      <button onClick={sendTweet}>Enviar</button>
      </div>

      <ul>
        {tweetList.map(tweet => {
          return <li>{tweet}</li>
        })}
      </ul>
    </div>
  )
};

export default Index;