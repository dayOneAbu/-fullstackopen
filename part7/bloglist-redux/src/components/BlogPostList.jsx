import { Link } from 'react-router-dom';
function BlogPostList({ post }) {
	return (
		<Link
			to={`/blogs/${post.id}`}
			// eslint-disable-next-line tailwindcss/no-custom-classname
			className='blogPost m-4 flex w-9/12 rounded-lg p-4 shadow-lg hover:bg-slate-300'
		>
			{post.title}, by {post.author}
		</Link>
	);
}

export default BlogPostList;
