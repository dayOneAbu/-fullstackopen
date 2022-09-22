import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../reducers/userReducer';

function NavBar() {
	const user = useSelector((state) => state.user.currentUser);
	const dispatch = useDispatch();
	return (
		<nav className='flex h-10 flex-row items-center justify-between bg-gray-200 p-8'>
			<div className='mx-8 flex items-start justify-between px-4'>
				<Link className='mx-4 rounded-md bg-gray-50 p-4 hover:scale-110' to='/'>
					Blogs
				</Link>
				<Link
					className='mx-4 rounded-md bg-gray-50 p-4 hover:scale-110'
					to='/users'
				>
					Users
				</Link>
				<Link
					className='mx-4 rounded-md bg-gray-50 p-4 hover:scale-110'
					to='/create'
				>
					Create New
				</Link>
			</div>
			<div className='mx-8 flex items-start justify-between px-4'>
				<p className='capitalize text-blue-500 '>{user.userName} is loggedIn</p>
				<button
					className='mx-4 scale-90 rounded-lg bg-red-500 px-8 text-white hover:scale-100'
					onClick={() => {
						dispatch(logOut());
					}}
				>
					logout
				</button>
			</div>
		</nav>
	);
}
export default NavBar;
