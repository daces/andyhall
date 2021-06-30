import React from 'react';
import styled from 'styled-components';
import { media } from '../defaults/media';
import { colors } from '../defaults/styles';
import Navigation from '../components/nav/navigation';
import Layout from '../components/layouts/layout';
import ContactForm from '../components/contactForm';
import Demo from '../components/demo';

const Prints = () => {
	return (
		<>
			<Layout />

			<Demo />
			<Navigation className="page" />
			<Wrap>
				<h1>PRINT SALES</h1>
				<p>All prints on this site are for sale</p>
				<br />
				<h2>Limited edition price list:</h2>
				<p>A3 (16.5” x 11.7”) £210 edition of 40</p>
				<p>A2 (23.4” x 16.5”) £330 edition of 25</p>
				<p>A1 (33.1” x 23.4”) £455 edition of 10</p>
				<br />
				<p>Photograph printed on C-type matt print</p>
				<p>Signed and numbered on the back</p>
				<p>All prices include postage, packaging +VAT</p>
				<br />
				<p>Please contact directly andz.hall@virgin.net</p>
			</Wrap>
			<ContactForm />
		</>
	);
};
export default Prints;

const Wrap = styled.div`
	text-align: center;
	max-width: 70vw;
	margin: auto;
	background-color: #6b8694;
	color: #fff;
	padding: 1em ${colors.boxPaddingMd} 2em ${colors.boxPaddingMd};
	@media screen and ${media.smallMax} {
		padding: 1em ${colors.boxPaddingSm} 2em ${colors.boxPaddingSm};
	}
	@media ${media.xLarge} {
		max-width: 100%;
		padding-right: 4vw;
	}
	h1 {
		font-size: 6vw;
		line-height: 1;
	}
`;
