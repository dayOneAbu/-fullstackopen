function Total({ parts }) {
  return (
    <p>
      Number of exercises{" "}
      {parts.reduce((accumulator, { exercises }) => {
        return accumulator + exercises;
      }, 0)}
    </p>
  );
}
export default Total;
