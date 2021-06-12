import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import styled from 'styled-components';
import Gallery from 'react-photo-gallery';
import { Box } from 'theme-ui';
import styled from 'styled-components';
import Navigation from '../components/nav/navigation';
import Layout from '../components/layouts/layout';
class BlogPost extends Component {
	render() {
		const { edges } = this.props.data.allFile;

		// const galleryPhotos = edges.map((edge) => ({
		// 	src: edge.node.childImageSharp.gatsbyImageData.images.fallback.src,
		// 	height: edge.node.childImageSharp.gatsbyImageData.height,
		// 	width: edge.node.childImageSharp.gatsbyImageData.width,
		// 	srcSet: edge.node.childImageSharp.gatsbyImageData.images.fallback.srcSet,
		// 	sizes: edge.node.childImageSharp.gatsbyImageData.images.fallback.sizes,
		// }));
		const galleryPhotos = edges.map((edge) => {
			if (edge.node.childImageSharp !== null) {
				return {
					src: edge.node.childImageSharp.gatsbyImageData.images.fallback.src,
					height: edge.node.childImageSharp.gatsbyImageData.height,
					width: edge.node.childImageSharp.gatsbyImageData.width,
					srcSet: edge.node.childImageSharp.gatsbyImageData.images.fallback.srcSet,
					sizes: edge.node.childImageSharp.gatsbyImageData.images.fallback.sizes,
				};
			}

			return null;
		});
		return (
			<Wrap>
				<Layout title="Hare & Tortoise" />
				<Navigation />

				{/* {edges.map((edge, idx) => {
					return <GatsbyImage key={idx} image={getImage(edge.node)} alt="gallery house" />;
				})} */}

				<Box>
					<Gallery
						photos={galleryPhotos}
						direction="column"
						margin={5}
						//   margin={options.margin}
						//   onClick={openLightbox}
					/>
				</Box>
			</Wrap>
		);
	}
}

BlogPost.propTypes = {
	data: PropTypes.object.isRequired,
	name: PropTypes.string,
};

export default BlogPost;

const Wrap = styled.div`
	width: 82%;
	margin-left: auto;
`;
export const pageQuery = graphql`
	query MyQuery($slug: String) {
		allFile(filter: { relativeDirectory: { eq: $slug } }) {
			edges {
				node {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}
	}
`;
