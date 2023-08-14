export const Statistics = ({neutral, bad, good, total, positivePercentage}) => {
  return <div>
    <p>Good: {good}</p>
    <p>Bad: {bad}</p>
    <p>Neutral: {neutral}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}%</p>
  </div>
}