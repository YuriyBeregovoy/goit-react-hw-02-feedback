export const Statistics = ({neutral, bad, good, total, positivePercentage}) => {
  if (total > 0) {return <ul>
    <li>Good: {good}</li>
    <li>Bad: {bad}</li>
    <li>Neutral: {neutral}</li>
    <li>Total: {total}</li>
    <li>Positive feedback: {positivePercentage}%</li>
  </ul>
  } else {
    return <p>There is no feedback</p>
  }
}