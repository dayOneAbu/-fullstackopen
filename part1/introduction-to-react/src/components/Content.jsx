import Part from "./Part";

function Content(props) {
  const { parts } = props;
  return (
    <>
      {parts.map((part, idx) => (
        <Part key={idx} part={part.name} exercises={props.exercises} />
      ))}
    </>
  );
}
export default Content;
