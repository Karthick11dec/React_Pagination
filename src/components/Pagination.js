import React from 'react';

const Pagination = ({ length, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= length; i++) {
		pageNumbers.push(i);
	}

	return (
		<div>
			<nav>
				<ul className='pagination d-flex justify-content-center'>
					{pageNumbers.map((number) => (
						<li key={number} >
							<a onClick={() => paginate(number)} href='!#' className='page-link'>
								{number}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Pagination;
