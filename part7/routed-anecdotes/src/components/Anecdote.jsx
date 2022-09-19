import { useParams } from 'react-router-dom';
function Anecdote({ anecdotes }) {
	const { id } = useParams();
	const anecdoteById = anecdotes.find((item) => item.id.toString() === id);

	return (
		<>
			{anecdoteById && (
				<div>
					<h1>
						{anecdoteById.content} by {anecdoteById.author}
					</h1>
					<span>has {anecdoteById.votes} votes</span>
					<p>for more info see. {anecdoteById.info}</p>
				</div>
			)}
		</>
	);
}
export default Anecdote;
