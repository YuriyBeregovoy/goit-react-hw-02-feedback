export const Statistics = ({neutral, bad, good, total, positivePercentage}) => {
  if (total > 0) {return <div>
    <p>Good: {good}</p>
    <p>Bad: {bad}</p>
    <p>Neutral: {neutral}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}%</p>
  </div>
  } else {
    return <p>There is no feedback</p>
  }
}