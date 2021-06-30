import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import styled from 'styled-components';
import Gallery from 'react-photo-gallery';
import { Box } from 'theme-ui';
import styled from 'styled-components';
import Navigation from '../components/nav/navigation';
import Layout from '../components/layouts/layout';
import { media } from '../defaults/media';
import { colors } from '../defaults/styles';
import Demo from '../components/demo';

//React.useLayoutEffect = React.useEffect;
class BlogPost extends Component {
	render() {
		const { edges } = this.props.data.allFile;
		//let { heading } = this.props.path;
		//console.log(this.props);
		//console.log(this.props.pageContext.slug);
		// const galleryPhotos = edges.map((edge) => ({
		// 	src: edge.node.childImageSharp.gatsbyImageData.images.fallback.src,
		// 	height: edge.node.childImageSharp.gatsbyImageData.height,
		// 	width: edge.node.childImageSharp.gatsbyImageData.width,
		// 	srcSet: edge.node.childImageSharp.gatsbyImageData.images.fallback.srcSet,
		// 	sizes: edge.node.childImageSharp.gatsbyImageData.images.fallback.sizes,
		// }));
		const galleryPhotos = edges
			.filter((eve, idi) => {
				return idi !== 0;
			})
			.map((edge) => {
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
			<Wrap className="image-gal">
				<Layout title="Andy Hall" />
				<Demo />
				<Navigation />
				<ImageBlock>
					<GatsbyImage image={getImage(edges[0].node.childImageSharp)} alt="gallery house" />;
					<ContentBox>
						<Title>{this.props.pageContext.slug !== '/*' ? this.props.pageContext.slug.replace('published/', '') : ''}</Title>
					</ContentBox>
				</ImageBlock>
				<Box>
					<Gallery2
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
	background: #0b0e10;
`;
const Gallery2 = styled(Gallery)`
	margin: 0 5px;
	img:first-of-type {
		padding-left: 15vw;
	}
`;
const ContentBox = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 70vw;
	margin: 0 auto;
	z-index: 2;
	@media screen and ${media.mediumMax} {
		top: 0;
		left: 0;
		transform: none;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 52vh;
		padding: 4em 3em 2em 3em;
	}
`;
const Title = styled.h1`
	font-size: 6vw;
	line-height: 2;
	color: ${colors.white};
	z-index: 9;
	padding-bottom: 0;
	text-transform: capitalize;
	border-bottom: 2px solid ${colors.white};
`;
const ImageBlock = styled.div`
	position: relative;
	@media screen and ${media.mediumMax} {
		div:first-of-type {
			height: 70vh;
		}
	}
	&::after {
		opacity: 0.5;
		background: radial-gradient(transparent, #111);
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
	}
`;
export const pageQuery = graphql`
	query MyQuery($slug: String) {
		allFile(filter: { relativeDirectory: { eq: $slug } }, skip: 1) {
			edges {
				node {
					childImageSharp {
						gatsbyImageData(placeholder: BLURRED)
					}
				}
			}
		}
	}
`;
