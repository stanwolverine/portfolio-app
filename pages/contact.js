import React, { Component } from 'react';
import Link from 'next/link';
import Header from '../components/Header';

export default class contact extends Component {
	render() {
		return (
			<>
				<Header />
				<div>
					This is contact page.
					<Link href='/'>
						<a>
							Take me to <span>Home</span> page
						</a>
					</Link>
					<Link href='/about'>
						<a>
							Take me to <span>About</span> page
						</a>
					</Link>
				</div>
			</>
		);
	}
}
