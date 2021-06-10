import React from 'react';

const Posts = ({ posts, loading }) => {
	if (loading) {
		return <h2>Loading...</h2>;
	}

	return (
		<div className='d-flex justify-content-center'>
			<table className='table'>
				<thead className='bg-dark text-light'>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{posts.map((post) => (
						<tr key={post.id}>
							<td>{post.id}</td>
							<td>{post.name}</td>
							<td>{post.email}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Posts;
