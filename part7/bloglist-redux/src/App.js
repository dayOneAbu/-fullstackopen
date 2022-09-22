/* eslint-disable tailwindcss/no-custom-classname */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import NotificationMessage from './components/NotificationMessage';
import PostForm from './components/PostForm';
import { loadUser } from './reducers/userReducer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPosts from './pages/BlogPosts';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import BlogPostDetail from './pages/BlogPostDetail';
import NavBar from './components/NavBar';

function App() {
	const user = useSelector((state) => state.user.currentUser);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadUser());
	}, [dispatch]);

	return (
		<div className='App'>
			<NotificationMessage />

			{user ? (
				<>
					<Router>
						<NavBar />
						<Routes>
							<Route path='/' element={<BlogPosts />} />
							<Route path='/users' element={<Users user={user} />} />
							<Route path='/users/:id' element={<UserDetail />} />
							<Route path='/create' element={<PostForm />} />
							<Route
								path='/blogs/:id'
								element={<BlogPostDetail currentUser={user} />}
							/>
						</Routes>
					</Router>
				</>
			) : (
				<LoginForm />
			)}
		</div>
	);
}
export default App;
