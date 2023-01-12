import Title from './Title';

const Contact = () => {
	return (
		<div className='flex flex-col mb-10 mx-auto'>
			<div className='flex justify-center items-center'>
				<form
					action='https://getform.io/f/cf4ccb99-6c91-42b5-ad9a-cf27b3f15293'
					method='POST'
					className='flex flex-col w-11/12 md:w-7/12'>
					<Title>Contact</Title>
					<input
						type='text'
						name='name'
						placeholder='Name'
						className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
						required
					/>
					<input
						type='text'
						name='email'
						placeholder='Email'
						className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'
					/>
					<textarea
						name='message'
						placeholder='Message'
						rows='10'
						className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none'
						required
					/>
					<button
						type='submit'
						className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md'>
						Work with me
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
