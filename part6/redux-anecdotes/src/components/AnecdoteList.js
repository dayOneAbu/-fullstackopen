import Anecdote from './Anecdote';
import { useSelector, useDispatch } from 'react-redux';
import { notify } from '../reducers/notificationReducer';
import { voteAnecdote } from '../reducers/anecdoteReducer';
function AnecdoteList() {
	const anecdotes = useSelector((state) => state.anecdotes);
	const dispatch = useDispatch();
	const vote = (item) => {
		dispatch(voteAnecdote(item));
		// dispatch({ type: 'anecdotes/voteAnecdote', payload: id });
	};
	const filter = useSelector((state) => state.filter);
	const anecdotesToBeVisible = filter
		? anecdotes.filter((anecdote) => {
				return anecdote.content.toLowerCase().includes(filter);
		  })
		: anecdotes;
	return (
		<div>
			<h2>Anecdotes</h2>
			<div style={{ marginBottom: 10 }}>
				<label htmlFor='filterKey'>filter</label>
				<input
					name='filterKey'
					onChange={(e) => {
						dispatch({
							type: 'filter/filterAnecdote',
							payload: e.target.value,
						});
					}}
				/>
			</div>
			{anecdotesToBeVisible &&
				anecdotesToBeVisible
					.slice()
					.sort((a, b) => b.votes - a.votes)
					.map((anecdote) => (
						<Anecdote
							key={anecdote.id}
							id={anecdote.id}
							content={anecdote.content}
							votes={anecdote.votes}
							onClick={() => {
								vote(anecdote);
								dispatch(notify(anecdote.content, 5));
							}}
						/>
					))}
		</div>
	);
}
export default AnecdoteList;
