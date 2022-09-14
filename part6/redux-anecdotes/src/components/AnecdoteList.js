import Anecdote from './Anecdote';
import { useSelector, useDispatch } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
function AnecdoteList() {
	const anecdotes = useSelector((state) => state);
	const dispatch = useDispatch();
	const vote = (id) => {
		dispatch(voteAnecdote(id));
	};
	return (
		<div>
			<h2>Anecdotes</h2>
			{anecdotes
				.sort((a, b) => b.votes - a.votes)
				.map((anecdote) => (
					<Anecdote
						key={anecdote.id}
						id={anecdote.id}
						content={anecdote.content}
						onClick={() => vote(anecdote.id)}
						votes={anecdote.votes}
					/>
				))}
		</div>
	);
}
export default AnecdoteList;
