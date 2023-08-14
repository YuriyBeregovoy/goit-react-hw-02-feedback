export const FeedbackOptions = ({onLeaveFeedbackGood, onLeaveFeedbackBad, onLeaveFeedbackNeutral}) => {

  return <div>
    <button onClick={onLeaveFeedbackGood}>Good</button>
    <button onClick={onLeaveFeedbackBad}>Bad</button>
    <button onClick={onLeaveFeedbackNeutral}>Neutral</button>
</div>

}