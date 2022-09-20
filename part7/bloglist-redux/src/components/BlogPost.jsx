import BlogPostList from './BlogPostList';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { likePost, removePost } from '../reducers/postReducer';
function BlogPost({ currentUser }) {
	const post = useSelector((state) => state.post);
	const dispatch = useDispatch();
	const LikeHandler = async (id, data) => {
		dispatch(likePost(id, data));
	};

	const handelDelete = async (id) => {
		if (window.confirm('Do you really want to Remove this post?')) {
			dispatch(removePost(id));
		}
	};
	return (
		<div className='blog'>
			<h2>blogs</h2>
			{post &&
				post
					.slice()
					.sort((a, b) => a.likes - b.likes)
					.map((post) => (
						<BlogPostList
							currentUser={currentUser}
							handelLike={LikeHandler}
							handelDelete={handelDelete}
							key={post.id}
							post={post}
						/>
					))}
		</div>
	);
}
BlogPost.propTypes = {
	currentUser: PropTypes.object.isRequired,
};
export default BlogPost;
