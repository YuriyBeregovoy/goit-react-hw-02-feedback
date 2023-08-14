const { Component } = require("react")

export class App extends Component {

state = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positiveQuantity: 0
  }
  
  handleClickGood = () => {
    this.setState(
      (prevState) => {
        return { good: prevState.good + 1, };
      },    () => this.countTotalFeedback(),
      () => this.countPositiveFeedbackPercentage());
  };

  handleClickBad = () => {
    this.setState(
      (prevState) => {
        return { bad: prevState.bad + 1, };
      }, () => this.countTotalFeedback(),
      () => this.countPositiveFeedbackPercentage())
  };

 handleClickNeutral = () => {
    this.setState(
      (prevState) => {
        return {neutral: prevState.neutral + 1, };
      }, () => this.countTotalFeedback(),
      () => this.countPositiveFeedbackPercentage()
    );
  };


  countTotalFeedback = () => {
    this.setState(
      ({ neutral, bad, good }) => {
        return { total: neutral + bad + good, };
      },
    () => this.countPositiveFeedbackPercentage());
  };

  countPositiveFeedbackPercentage = () => {
   this.setState(
      ({good, total}) => {
        const positivePercentage = Math.round((good * 100) / total);
      return { positiveQuantity: positivePercentage };
      },);
  };



  render() {
    return (
     <div> <div>
        <p>Please leave feedback</p>
        <button onClick={this.handleClickGood}>Good</button>
        <button onClick={this.handleClickBad}>Bad</button>
        <button onClick={this.handleClickNeutral}>Neutral</button>
      </div>
      <div>
          <p>Statistics</p>
        <p>Good: {this.state.good}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Total: {this.state.total}</p>
        <p>Positive feedback: {this.state.positiveQuantity}%</p>
      </div></div>
  );
 }
};
