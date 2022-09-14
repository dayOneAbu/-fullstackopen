function Anecdote({ id, content, onClick, votes }) {
	return (
		<div key={id}>
			<div>{content}</div>
			<div>
				has {votes}
				<button onClick={() => onClick(id)}>vote</button>
			</div>
		</div>
	);
}
export default Anecdote;
