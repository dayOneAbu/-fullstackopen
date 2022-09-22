import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/userReducer';

function LoginForm() {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		const { userName, password } = e.target;
		dispatch(
			login({
				userName: userName.value,
				password: password.value,
			})
		);
	};
	return (
		<div className='mx-auto my-20 max-w-md bg-gray-100 p-8 shadow-md'>
			<h2 className='text-3xl font-bold uppercase'>log into the application</h2>

			<form
				className='mt-9 flex flex-col gap-y-6 gap-x-2'
				onSubmit={handleLoginSubmit}
			>
				<div>
					<label
						className='block text-xl font-medium uppercase'
						htmlFor='userName'
					>
						userName {''}
					</label>
					<input
						className='block h-10 w-full rounded-md border-gray-300 shadow-sm sm:text-sm'
						id='username'
						name='userName'
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
					/>
				</div>
				<div className='my-4 flex flex-col items-start justify-between'>
					<label
						className='block text-xl font-medium uppercase'
						htmlFor='password'
					>
						Password {''}
					</label>
					<input
						className='block h-10 w-full rounded-md border-gray-300 shadow-sm sm:text-sm'
						id='password'
						name='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button
					className='mx-4 h-10 rounded-lg bg-blue-500 px-8 capitalize text-white shadow-xl'
					id='login-btn'
					type='submit'
				>
					login
				</button>
			</form>
		</div>
	);
}
export default LoginForm;
