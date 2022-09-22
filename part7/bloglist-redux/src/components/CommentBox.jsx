import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { commentPost } from '../reducers/postReducer';

function CommentBox({ id }) {
	const [comment, setComment] = useState('');
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		const { comment } = e.target;
		dispatch(commentPost(id, { comment: comment.value }));
	};
	return (
		<form className='mx-4 flex flex-row items-end px-4' onSubmit={handleSubmit}>
			<div className='my-4 flex flex-col items-start justify-between'>
				<label className='text-lg capitalize' htmlFor='comment'>
					your comment {''}{' '}
				</label>
				<input
					className='block h-20  w-56 rounded-md border-gray-300 shadow-sm sm:text-sm'
					id='comment'
					name='comment'
					value={comment}
					placeholder='write the comment Here'
					onChange={(e) => setComment(e.target.value)}
				/>
			</div>
			<button
				className='m-4 h-10 rounded-md bg-blue-500 px-8 capitalize text-white shadow-xl'
				type='submit'
			>
				add comment
			</button>
		</form>
	);
}
export default CommentBox;
