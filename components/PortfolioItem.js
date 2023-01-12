import Image from 'next/image';

const PortfolioItem = ({ title, imgUrl, stack, link}) => {
	return (
		<a
			href={link}
			target='_blank'
			rel='noopener noreferrer'
			className='border-2 border-stone-900 dark:border-white rounded-md overflow-hidden'>
			<Image src={imgUrl} alt='portfolio thumbnail' className='w-full h-36 md:h-48 object-cover cursor-pointer' width={200} height={200}></Image>
			{/* <img
				src={imgUrl}
				alt='portfolio thumbnail'
				className='w-full h-36 md:h-48 object-cover cursor-pointer'
			/> */}
			<div className='w-full p-4'>
				<h3 className='text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold'>
					{title}
				</h3>
				<p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
					{stack.map(item => (
						<span
							key={stack.indexOf(item)}
							className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white dark:text-white rounded-md'>
							{item}
						</span>
					))}
				</p>
			</div>
		</a>
	);
};

export default PortfolioItem;
