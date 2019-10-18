import React from 'react';
import Link from 'next/link';

const PRIMARY_COLOR = '#3f6fb9';
const PRIMARY_COLOR_LIGHT = '#3f90b4';
const PRIMARY_COLOR_DARK = '#3f4bbe';
const LIGHT_SECONDARY_COLOR = '#3eafaf';
const TERTIARY_COLOR = '#5b40c2';

const styles = {
	header: {
		width: '100%',
		backgroundColor: LIGHT_SECONDARY_COLOR,
		height: '50px',
		color: PRIMARY_COLOR
	},
	navigation: { float: 'left' },
	list: {
		listStyle: 'none',
		display: 'inline-block'
	},
	link: {
		textDecoration: 'none',
		fontSize: '20px',
		display: 'inline-block'
	},
	myName: {
		float: 'right',
	}
};

const Header = props => {
	const headerLinks = [
		{ routeName: 'home', path: '/' },
		{ routeName: 'contact', path: '/contact' },
		{ routeName: 'about', path: '/about' },
		{ routeName: 'projects', path: '#projects' }
	];
	return (
		<header style={styles.header}>
			<nav style={styles.navigation}>
				<ul style={styles.list}>
					{headerLinks.map(links => (
						<li key={links.path} style={styles.link}>
							<Link href={links.path}>
								<a>{links.routeName}</a>
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<h2 style={styles.myName}>Jatin Nagar</h2>
		</header>
	);
};

export default React.memo(Header);
