import { Link } from 'react-router-dom';
function UsersList({ user }) {
	return (
		<tr className='border-2 border-gray-600'>
			<td className='mx-4 bg-gray-100 px-2 '>
				<Link to={`/users/${user.id}`}>{user.name}</Link>
			</td>
			<td className='mx-4 bg-gray-400  px-2 '>{user.blogs.length}</td>
		</tr>
	);
}
export default UsersList;
