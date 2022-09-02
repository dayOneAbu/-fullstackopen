import StatisticLine from "./StatisticLine";

function Statistics({ feedback }) {
  if (feedback.all === 0) return <h2>No feedback given</h2>;
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine statName={"good"} value={feedback.good} />
          <StatisticLine statName="neutral" value={feedback.neutral} />
          <StatisticLine statName="bad" value={feedback.bad} />
          <StatisticLine statName="all" value={feedback.all} />
          <StatisticLine statName="average" value={feedback.average} />
          <StatisticLine statName="positive" value={feedback.positive} />
        </tbody>
      </table>
    </div>
  );
}
export default Statistics;
