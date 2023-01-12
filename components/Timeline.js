import TimelineItem from './TimelineItem';
import timeline from '../data/timeline';
import Title from './Title';

const Timeline = () => {
	return (
		// change margin to my-20 when you add projects
		<div className='flex flex-col md:flex-row justify-center mt-5 mb-20'>
			<div className='w-full md:w-7/12'>
				<Title>Timeline</Title>
				{timeline.map(item => (
					<TimelineItem
						key={timeline.indexOf(item)}
						year={item.year}
						title={item.title}
						duration={item.duration}
						details={item.details}
					/>
				))}
			</div>
		</div>
	);
};

export default Timeline;
