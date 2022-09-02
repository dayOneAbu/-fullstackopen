import Part from "./Part";

function Content(props) {
  const { parts } = props;
  return (
    <>
      {parts.map((part, idx) => (
        <Part key={idx} part={part.name} exercises={part.exercises} />
      ))}
    </>
  );
}
export default Content;
