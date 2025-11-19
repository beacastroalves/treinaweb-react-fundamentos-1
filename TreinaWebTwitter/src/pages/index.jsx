import { useState } from "react";
import TextInput from "../components/TextInput";
import Tweet from "../components/Tweet";
import styles from "./index.module.css";

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
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>TreinaWebTweet</h1>
      <div className={styles.line}></div>
      <div className={styles.contentText}>
        <img src="https://github.com/beacastroalves.png" />
        <TextInput
          className={styles.textInput}
          placeholder={'O que está acontecendo?'}
          maxLength={maxLength}
          value={text}
          onChange={onTextChange}
        />
      </div>
      <div className={styles.contentInfo}>
        <div className={styles.caracteres}>{text.length} / {maxLength}</div>
        <button onClick={sendTweet}>Tweetar</button>
      </div>

      <ul>
        {tweetList.map(tweet => {
          return (
            <li><Tweet children={tweet} /></li>
          )
        })}
      </ul>
    </div>
  )
};

export default Index;