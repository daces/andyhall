import React from 'react';
import Navigation from '../components/nav/navigation';
import { media } from '../defaults/media';
import { useStaticQuery, graphql } from 'gatsby';
import Gallery from 'react-photo-gallery';
import { Box } from 'theme-ui';
import styled from 'styled-components';
import Layout from '../components/layouts/layout';
const Zines = () => {
	const data = useStaticQuery(graphql`
		query {
			allFile(filter: { relativeDirectory: { eq: "published/zines" } }) {
				edges {
					node {
						childImageSharp {
							gatsbyImageData
						}
					}
				}
			}
		}
	`);

	const galleryPhotos = data.allFile.edges
		.filter((edge) => {
			if (edge.node.childImageSharp !== null) {
				return true;
			}
			return null;
		})
		.map((edge) => {
			return {
				src: edge.node.childImageSharp.gatsbyImageData.images.fallback.src,
				height: edge.node.childImageSharp.gatsbyImageData.height,
				width: edge.node.childImageSharp.gatsbyImageData.width,
				srcSet: edge.node.childImageSharp.gatsbyImageData.images.fallback.srcSet,
				sizes: edge.node.childImageSharp.gatsbyImageData.images.fallback.sizes,
			};
		});
	return (
		<>
			<Layout />
			<Navigation />

			<Wrap>
				<h1>Zines</h1>
				<h2>“The Square Mile”:</h2>
				<p>
					Images of the City of London’s Square taken between 2015 – 2020” Edition of 50, 44 pages, 38 images, £6 including
					P&P
				</p>
				<p>Please contact directly andz.hall@virgin.net</p>
				<Box>
					<Gallery photos={galleryPhotos} direction="column" margin={5} />
				</Box>
			</Wrap>
		</>
	);
};
export default Zines;

const Wrap = styled.div`
	text-align: center;
	max-width: 70vw;
	margin-left: auto;
	@media ${media.xLarge} {
		margin-left: 12vw;
		max-width: 100%;
	}
	h1 {
		font-size: 12vw;
	}
`;
