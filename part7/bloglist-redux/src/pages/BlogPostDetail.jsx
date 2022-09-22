import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import CommentBox from '../components/CommentBox';
import { fetchSinglePost, likePost, removePost } from '../reducers/postReducer';
function BlogPostDetail({ currentUser }) {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		dispatch(fetchSinglePost(id));
	}, []);
	const post = useSelector((state) => state.post.detail);
	const handelDelete = async (id) => {
		if (window.confirm('Do you really want to Remove this post?')) {
			dispatch(removePost(id));
			navigate('/');
		}
	};
	const handelLike = async (id, data) => {
		dispatch(likePost(id, data));
	};
	if (!post) {
		return null;
	}
	return (
		<div className='mx-auto max-w-4xl items-center bg-gray-50 py-4 shadow-lg'>
			<div className='mx-2 px-2'>
				<h1 className='text-3xl font-bold uppercase'>
					{post.title}, by {post.author}
				</h1>
				<div className='mx-4 px-2 text-xl  '>
					{post.url}

					{post.user?.name}
				</div>
				<p className='flex flex-col items-start justify-between '>
					<button
						className='m-4 h-10 rounded-lg bg-blue-500 px-8 capitalize text-white shadow-xl'
						id='like-btn'
						onClick={() => handelLike(post.id, post)}
					>
						<span className='text-3xl font-bold'>{post.likes} </span>
						like
					</button>
					{post.user?.name === currentUser.name && (
						<button
							className='m-4 h-10 rounded-lg bg-blue-500 px-8 capitalize text-white shadow-xl'
							id='delete-btn'
							onClick={() => handelDelete(post.id)}
						>
							Delete Post
						</button>
					)}
				</p>
			</div>
			<div className='px-4 '>
				<h2 className='text-xl font-bold uppercase'>Comments</h2>
				<CommentBox id={post.id} />
				{post.comments &&
					post.comments.map((comment, idx) => <li key={idx}>{comment}</li>)}
			</div>
		</div>
	);
}
export default BlogPostDetail;
