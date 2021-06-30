import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import styled from 'styled-components';
import { media } from '../defaults/media';
import { colors } from '../defaults/styles';
import Button from './buttons/button';

const Projects = () => {
	const data = useStaticQuery(graphql`
		query {
			allProjectJson {
				nodes {
					description
					image
					title
					link
				}
			}
			allFile(filter: { relativeDirectory: { eq: "project-images" } }) {
				nodes {
					base
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}
	`);
	return (
		<Wrapper id="projects" className="tiles">
			{data.allProjectJson.nodes.map((segment, idx) => {
				//console.log(segment);
				//console.log(segment);
				let imageInstance = data.allFile.nodes.find((node) => {
					return node.base === segment.image;
				});

				return (
					<Article key={idx}>
						<Images className="images">
							<Content>
								<Title>{segment.title}</Title>
								<Description>{segment.description}</Description>
								<AniLink2 paintDrip hex={colors.aniLink} direction="up" duration={1} to={`../${segment.link}`}>
									<Button>See More</Button>
								</AniLink2>
							</Content>
							<GatsbyImage className="photo" image={getImage(imageInstance.childImageSharp)} alt={segment.description} />
						</Images>
					</Article>
				);
			})}
		</Wrapper>
	);
};

export default Projects;
const AniLink2 = styled(AniLink)`
	font-weight: normal;
	padding: 10px 0;
	border-bottom: 2px solid transparent;
	color: ${colors.navigationLinks};
	text-decoration: none;
	text-transform: uppercase;
	font-family: sans-serif;
	padding-bottom: 25px;
	letter-spacing: 0.2em;
	.is-active & {
		border-bottom: 1px solid #7195a6;
	}
`;
const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
const Content = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 2;
	padding: 0;
	@media screen and ${media.smallMax} {
		padding: 2em 0 0 ${colors.boxPaddingSm};
	}
	@media screen and ${media.mediumMax} {
		top: 0;
		left: 0;
		transform: none;
		padding: 2em 0 0 ${colors.boxPaddingSm};
	}
	@media screen and ${media.largeMax} {
		padding: 2em 0 0;
	}
`;
const Title = styled.h2`
	display: inline-block;
	border-bottom: 2px solid ${colors.white};
	line-height: 1;
	padding-bottom: 1em;
	font-size: 1.6em;
	color: ${colors.white};
`;
const Description = styled.p`
	color: ${colors.white};
	margin: 0;
	@media screen and ${media.mediumMax} {
		line-height: 1.5em;
		height: 3em;
		overflow: hidden;
	}
`;
const Images = styled.div`
	display: block;
	position: relative;
	.photo {
		height: 100%;
	}
	&:after {
		transition-duration: 1s;
		opacity: 0.5;
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
	}
	&:hover:after {
		opacity: 0;
		transition-duration: 1s;
	}
`;
const Article = styled.article`
	display: flex;
	width: 40%;
	&:nth-child(4n-1),
	&:nth-child(4n-2) {
		width: 60%;
	}
	@media screen and ${media.mediumMax} {
		width: 100%;
		&:nth-child(4n-1),
		&:nth-child(4n-2) {
			width: 100%;
		}
	}
	&:nth-child(1) .images:after {
		background: #6fc3df;
	}
	&:nth-child(2) .images:after {
		background: #8d82c4;
	}
	&:nth-child(3) .images:after {
		background: #ec8d81;
	}
	&:nth-child(4) .images:after {
		background: #e7b788;
	}
	&:nth-child(5) .images:after {
		background: #8ea9e8;
	}
	&:nth-child(6) .images:after {
		background: #87c5a4;
	}
`;
