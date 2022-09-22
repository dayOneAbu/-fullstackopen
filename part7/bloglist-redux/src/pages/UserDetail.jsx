import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUserDetail } from '../reducers/userReducer';
function UserDetail() {
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUserDetail(id));
	}, []);
	const user = useSelector((state) => state.user.userDetail);
	return (
		<div className='mx-auto max-w-5xl items-center'>
			<h1 className='text-3xl font-bold uppercase'>{user.name}</h1>
			{user.blogs?.length > 0 ? (
				<div className='mx-4 my-2'>
					<h2 className='text-xl font-bold uppercase'>Added the following</h2>
					{user.blogs.map((post) => (
						<li className='text-base font-normal capitalize' key={post.id}>
							{post.title}
						</li>
					))}
				</div>
			) : (
				<h2 className='text-xl font-bold uppercase'>Added No posts yet!</h2>
			)}
		</div>
	);
}
export default UserDetail;
