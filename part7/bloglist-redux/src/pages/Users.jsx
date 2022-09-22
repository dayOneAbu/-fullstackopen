import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersList from '../components/UsersList';
import { fetchUsers } from '../reducers/userReducer';

function Users() {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.user.users);
	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	return (
		<div className='mx-auto max-w-5xl items-center'>
			{users && (
				<table className='mx-8 p-4'>
					<tr className='text-2xl font-bold capitalize'>
						<th className='px-4'>Users</th>
						<th className='px-4'>No. of Posts </th>
					</tr>
					{users.map((user) => (
						<UsersList key={user.id} user={user} />
					))}
				</table>
			)}
		</div>
	);
}
export default Users;
