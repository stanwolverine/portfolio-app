import React, { useEffect } from "react";
import PropTypes from "prop-types";

const BackgroundImage = props => {
	useEffect(() => {
		console.log(`${window.innerWidth}x${window.innerHeight}`);
	}, []);

	return (
		<>
			<div className={`bg-image ${props.className}`}>{props.children}</div>

			<style jsx>
				{`
					.bg-image {
						@media screen and (min-width: 1600px) {
							background-image: url("/hero-bg-1600x900.jpg");
						}
						@media screen and (min-width: 1366px) {
							background-image: url("/hero-bg-1366x768.jpg");
						}
						@media screen and (min-width: 1280px) {
							background-image: url("/hero-bg-1280x720.jpg");
						}
						background-position: ${props.position};
						background-size: ${props.size};
					}
				`}
			</style>
		</>
	);
};

BackgroundImage.defaultProps = {
	className: "",
	position: "center",
	size: "cover"
};

BackgroundImage.propTypes = {
	bgImage: PropTypes.string.isRequired
};

export default BackgroundImage;
