import React from 'react';

export default props => {
	React.useEffect(() => {
		alert(`${window.innerWidth}x${window.innerHeight}`);
	}, []);
	return (
		<>
			<div className='bg-image'>{props.children}</div>

			<style jsx>
				{`
					.bg-image {
						background-image: url(${props.bgImage});
						background-position: center;
						background-size: cover;
					}
				`}
			</style>
		</>
	);
};
