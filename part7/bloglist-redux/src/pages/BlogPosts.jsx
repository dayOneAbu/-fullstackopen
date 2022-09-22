import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogPostList from '../components/BlogPostList';
import { fetchBlogPosts } from '../reducers/postReducer';

function BlogPosts() {
	const post = useSelector((state) => state.post.posts);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchBlogPosts());
	}, []);
	return (
		// eslint-disable-next-line tailwindcss/no-custom-classname
		<div className='blog'>
			<h2 className='my-8 px-8 text-3xl uppercase text-blue-500'>blog posts</h2>
			{post &&
				post
					.slice()
					.sort((a, b) => b.likes - a.likes)
					.map((post) => <BlogPostList key={post.id} post={post} />)}
		</div>
	);
}

export default BlogPosts;
