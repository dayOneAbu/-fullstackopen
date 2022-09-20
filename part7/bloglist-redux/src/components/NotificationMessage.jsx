import { useSelector } from 'react-redux';

function NotificationMessage() {
	const message = useSelector((state) => state.notification);

	return (
		<>
			{message && (
				<div className={` ${message.type === 'success' ? 'success' : 'error'}`}>
					{message.text}
				</div>
			)}
		</>
	);
}
export default NotificationMessage;
