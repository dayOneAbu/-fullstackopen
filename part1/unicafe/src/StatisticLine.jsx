function StatisticLine({ statName, value }) {
  return (
    <tr>
      <td>{statName}</td>
      <td>
        {value} {statName === "positive" && "%"}
      </td>
    </tr>
  );
}
export default StatisticLine;
