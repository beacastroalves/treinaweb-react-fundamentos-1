import styles from './Tweet.module.css';

const Tweet = (props) => {
  return (
    <div className={styles.tweetContainer}>
      <img className={styles.avatar} src="https://github.com/beacastroalves.png" />
      <div className={styles.user}>
        <span className={styles.userName}>Beatriz Castro</span>
        <span className={styles.userUserName}>@beacastroalves</span>
        <span className={styles.date}>Há 12 horas</span>
      </div>
      <div className={styles.tweetText}>
        {props.children}
      </div>
    </div>
  )
};

export default Tweet;