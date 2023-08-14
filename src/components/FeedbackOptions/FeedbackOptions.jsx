export const FeedbackOptions = ({onLeaveFeedbackGood, onLeaveFeedbackBad, onLeaveFeedbackNeutral}) => {

  return <ul>
  <li><button onClick={onLeaveFeedbackGood}>Good</button></li>
  <li><button onClick={onLeaveFeedbackBad}>Bad</button></li>
  <li><button onClick={onLeaveFeedbackNeutral}>Neutral</button></li>
</ul>

}