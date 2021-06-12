import React from 'react';
import styled from 'styled-components';
import { media } from '../defaults/media';
import Navigation from '../components/nav/navigation';
import Layout from '../components/layouts/layout';
const Prints = () => {
	return (
		<>
			<Layout />
			<Navigation />
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
		</>
	);
};
export default Prints;

const Wrap = styled.div`
	text-align: center;
	max-width: 70vw;
	margin-left: auto;
	@media ${media.xLarge} {
		margin-left: 18vw;
		max-width: 100%;
	}
	h1 {
		font-size: 12vw;
		line-height: 1;
	}
`;
