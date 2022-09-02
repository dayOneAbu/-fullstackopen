function StatisticLine({ statName, value }) {
  return (
    <p>
      {statName} {value} {statName === "positive" && "%"}
    </p>
  );
}
export default StatisticLine;
