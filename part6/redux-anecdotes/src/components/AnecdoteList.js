import Anecdote from './Anecdote';
import { connect } from 'react-redux';
import { notify } from '../reducers/notificationReducer';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { filterAnecdote } from '../reducers/filterReducer';
function AnecdoteList(props) {
	const vote = (item) => {
		props.voteAnecdote(item);
	};
	const filter = (e) => {
		props.filterAnecdote(e.target.value);
	};

	return (
		<div>
			<h2>Anecdotes</h2>
			<div style={{ marginBottom: 10 }}>
				<label htmlFor='filterKey'>filter</label>
				<input name='filterKey' onChange={filter} />
			</div>
			{props.anecdotes &&
				props.anecdotes
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

								props.notify(anecdote.content, 5);
							}}
						/>
					))}
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		anecdotes: state.filter
			? state.anecdotes.filter((anecdote) =>
					anecdote.content.toLowerCase().includes(state.filter)
			  )
			: state.anecdotes,
	};
};
const mapDispatchToProps = {
	voteAnecdote,
	notify,
	filterAnecdote,
};
const ConnectedAnecdotes = connect(
	mapStateToProps,
	mapDispatchToProps
)(AnecdoteList);
export default ConnectedAnecdotes;
