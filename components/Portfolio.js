import portfolio from '../data/portfolio'
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
	return (
		<div className='flex flex-col md:flex-row items-center justify-center'>
			{/* current number of projects: 3 - change grid cols for # of projects */}
			<div className='grid grid-cols-3 gap-4'>
				{portfolio.map(project => (
					<PortfolioItem
						key={portfolio.indexOf(project)}
						imgUrl={project.imgUrl}
						title={project.title}
						stack={project.stack}
						link={project.link}
					/>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
