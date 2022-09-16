import { connect } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';

function AnecdoteForm(props) {
	const submitHandler = (e) => {
		e.preventDefault();
		const content = e.target.content.value;
		props.createAnecdote({ content, votes: 0 });
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
const mapDispatchToProps = {
	createAnecdote,
};
const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm);
export default ConnectedAnecdoteForm;
