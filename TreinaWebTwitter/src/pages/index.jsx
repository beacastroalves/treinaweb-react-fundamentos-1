import TextInput from "../components/TextInput";

const Index = () => {
  return (
    <div>
      <h1>TreinaWebTweet</h1>
      <div>
        <img src="https://github.com/beacastroalves.png" />
        <TextInput />
      </div>
      <div>
        <div>0 / 125</div>
        <button>Tweetar</button>
      </div>

      <ul>
        <li>Tweet 1</li>
        <li>Tweet 2</li>
      </ul>
    </div>
  )
};

export default Index;