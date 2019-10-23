import React from 'react';
import Link from 'next/link';
import Typist from 'react-typist';

const PRIMARY_COLOR = '#3f6fb9';
const YELLOW = 'rgb(255, 224, 0)';
const PRIMARY_COLOR_LIGHT = '#3f90b4';
const PRIMARY_COLOR_DARK = '#3f4bbe';
const LIGHT_SECONDARY_COLOR = '#3eafaf';
const TERTIARY_COLOR = '#5b40c2';
const MEHROON = 'rgb(173, 24, 24)';

export default function HeroSection() {
	return (
		<>
			<section className='hero-section'>
				<div className='hero-heading'>
					<h2 className='hero-heading__hello'>Hello, I am</h2>
					<h1 className='hero-heading__name'>Jatin Nagar.</h1>
					<Typist>
						<h2 className='hero-heading__hello'>I am a developer.</h2>
					</Typist>
				</div>
			</section>

			<style jsx>
				{`
					.hero-section {
						min-height: calc(100vh - 5.5rem);
						background-color: ${LIGHT_SECONDARY_COLOR};
					}
					.hero-heading__hello {
						font-family: Abril Fatface;
						/* font-family: Fjalla one; */
						/* font-family: Roboto; */
						/* font-family: Oswald; */
						font-family: Julius Sans one;
						/* font-family: Monoton; */
						/* font-family: Titillium web; */
						/* font-family: Ubuntu Condensed; */
						font-size: 3rem;
						padding-top: 10rem;
						padding-left: 7rem;
						color: white;
					}

					.hero-heading__name {
						font-size: 6rem;
						padding-left: 5rem;
						font-family: Abril Fatface;
						color: rgb(255, 224, 0);
					}
				`}
			</style>
		</>
	);
}
