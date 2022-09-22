import { useState } from 'react';
import { createPost } from '../reducers/postReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function PostForm() {
	const [post, setPost] = useState({
		title: '',
		author: '',
		url: '',
	});
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleCreatePostSubmit = (e) => {
		e.preventDefault();
		const { title, author, url } = e.target;
		dispatch(createPost(title.value, author.value, url.value));
		navigate('/');
	};
	return (
		<div className='mx-auto my-20 max-w-xl bg-gray-100 p-8 shadow-md'>
			<h2 className='text-3xl font-bold uppercase'>Create New Post</h2>
			<form
				className='mt-9 flex flex-col gap-y-6 gap-x-2'
				onSubmit={handleCreatePostSubmit}
			>
				<div>
					<label
						className='block text-xl font-medium uppercase'
						htmlFor='title'
					>
						title {''}{' '}
						<input
							className='block h-10 w-full rounded-md border-gray-300 shadow-sm sm:text-sm'
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
					<label
						className='block text-xl font-medium uppercase'
						htmlFor='author'
					>
						author {''}
						<input
							className='block h-10 w-full rounded-md border-gray-300 shadow-sm sm:text-sm'
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
					<label className='block text-xl font-medium uppercase' htmlFor='url'>
						url
					</label>
					<input
						className='block h-10 w-full rounded-md border-gray-300 shadow-sm sm:text-sm'
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
				<button
					className='mx-4 h-10 rounded-lg bg-blue-500 px-8 capitalize text-white shadow-xl'
					id='submit-btn'
					type='submit'
				>
					Create Post
				</button>
			</form>
		</div>
	);
}

export default PostForm;
