import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';

const App = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			const response = await fetch(
				'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json'
			);
			let res = await response.json();
			setPosts(res);
			setLoading(false);
		};

		fetchPosts();
	}, []);

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage; // 5 * 10 = 50
	const indexOfFirstPost = indexOfLastPost - postsPerPage; // 50-10 = 40
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // 40 to 50

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div className='container mt-5'>
			<h1 className='heading mb-3'>React Pagination</h1>
			<Posts posts={currentPosts} loading={loading} />
			<Pagination length ={postsPerPage} paginate={paginate} />
		</div>
	);
};

export default App;
