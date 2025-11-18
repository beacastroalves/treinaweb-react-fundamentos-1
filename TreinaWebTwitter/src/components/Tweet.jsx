const Tweet = (props) => {
  return (
    <div>
      <img src="https://github.com/beacastroalves.png" />
      <div>
        <span>Beatriz Castro</span>
        <span>@beacastroalves</span>
        <span>Há 12 horas</span>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
};

export default Tweet;