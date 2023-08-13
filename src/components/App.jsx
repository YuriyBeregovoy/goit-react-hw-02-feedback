const { Component } = require("react")

export class App extends Component {

state = {
  good: 0,
  neutral: 0,
  bad: 0
}

  render() {
    return (
     <div> <div>
        <p>Please leave feedback</p>
        <button>Good</button>
        <button>Bad</button>
        <button>Neutral</button>
      </div>
      <div>
        <p>Statistics</p>
        <p>Good</p>
        <p>Bad</p>
        <p>Neutral</p>
      </div></div>
  );
 }
};
