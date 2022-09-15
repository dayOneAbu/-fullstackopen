import { useDispatch } from 'react-redux';

function AnecdoteForm() {
	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		const content = e.target.content.value;
		dispatch({ type: 'anecdotes/createAnecdote', payload: content });
	};
	return (
		<div>
			<h2>create new</h2>
			<form onSubmit={submitHandler}>
				<div>
					<input name='content' />
				</div>
				<button type='submit'>create</button>
			</form>
		</div>
	);
}
export default AnecdoteForm;
