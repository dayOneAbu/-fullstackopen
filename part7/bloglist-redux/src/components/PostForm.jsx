import { useState } from 'react';
import { createPost } from '../reducers/postReducer';
import { useDispatch } from 'react-redux';
function PostForm() {
	const [post, setPost] = useState({
		title: '',
		author: '',
		url: '',
	});
	const dispatch = useDispatch();
	const handleCreatePostSubmit = (e) => {
		e.preventDefault();
		const { title, author, url } = e.target;
		dispatch(createPost(title.value, author.value, url.value));
	};
	return (
		<div>
			<h2>Create New Post</h2>
			<form onSubmit={handleCreatePostSubmit}>
				<div>
					<label htmlFor='title'>
						title {''}{' '}
						<input
							id='title'
							name='title'
							value={post.title}
							placeholder='write here post title'
							onChange={(e) =>
								setPost((prev) => {
									return {
										...prev,
										title: e.target.value,
									};
								})
							}
						/>
					</label>
				</div>
				<div>
					<label htmlFor='author'>
						author {''}
						<input
							id='author'
							name='author'
							value={post.author}
							onChange={(e) =>
								setPost((prev) => {
									return {
										...prev,
										author: e.target.value,
									};
								})
							}
						/>
					</label>
				</div>
				<div>
					<label htmlFor='url'>url</label>
					<input
						id='url'
						name='url'
						value={post.url}
						onChange={(e) =>
							setPost((prev) => {
								return {
									...prev,
									url: e.target.value,
								};
							})
						}
					/>
				</div>
				<button id='submit-btn' type='submit'>
					Create Post
				</button>
			</form>
		</div>
	);
}

export default PostForm;
