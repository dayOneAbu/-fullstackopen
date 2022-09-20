import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogPost from './components/BlogPost';
import LoginForm from './components/LoginForm';
import NotificationMessage from './components/NotificationMessage';
import PostForm from './components/PostForm';
import Togglable from './components/Togglable';
import { fetchBlogPosts } from './reducers/postReducer';
import { fetchUser, logUserOut } from './reducers/userReducer';

function App() {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUser());
		dispatch(fetchBlogPosts());
	}, [dispatch]);

	return (
		<div className='App'>
			<NotificationMessage />
			{user ? (
				<>
					<h3>{user.userName} is loggedIn </h3>
					<button
						onClick={() => {
							dispatch(logUserOut());
						}}
					>
						logout
					</button>
					<Togglable buttonLabel='Add Post'>
						<PostForm />
					</Togglable>
					<BlogPost currentUser={user} />
				</>
			) : (
				<LoginForm />
			)}
		</div>
	);
}
export default App;
