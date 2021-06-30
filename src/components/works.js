import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import styled from 'styled-components';
import { media } from '../defaults/media';
import { colors } from '../defaults/styles';
import Button from './buttons/button';

const WorksList = () => {
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
						gatsbyImageData(width: 664, height: 514)
					}
				}
			}
		}
	`);

	return (
		<Wrapper id="projects" className="tiles">
			{data.allProjectJson.nodes.map((segment, idx) => {
				//console.log(segment);
				let imageInstance = data.allFile.nodes.find((node) => {
					return node.base === segment.image;
				});

				if (idx % 2 === 0) {
					return (
						<Wrap key={idx}>
							<Article className="first">
								<AniLink paintDrip hex={colors.aniLink} direction="up" duration={1} to={`../${segment.link}`}>
									{/* <Link to={`../${segment.link}`}> */}
									<Images className="images">
										<GatsbyImage className="photo" image={getImage(imageInstance.childImageSharp)} alt={segment.description} />
									</Images>
									{/* </Link> */}
								</AniLink>
							</Article>

							<Article>
								<Content>
									<Title>{segment.title}</Title>
									<Description>{segment.description}</Description>
									<AniLink paintDrip hex={colors.aniLink} direction="up" duration={1} to={`../${segment.link}`}>
										<Button href={`../${segment.link}`}>See More</Button>
									</AniLink>
								</Content>
							</Article>
						</Wrap>
					);
				} else {
					return (
						<Wrap key={`${idx}drw4`}>
							<Article>
								<Content>
									<Title>{segment.title}</Title>
									<Description>{segment.description}</Description>
									<AniLink paintDrip hex={colors.aniLink} direction="up" duration={1} to={`../${segment.link}`}>
										<Button href={`../${segment.link}`}>See More</Button>
									</AniLink>
								</Content>
							</Article>
							<Article className="first">
								<AniLink paintDrip hex={colors.aniLink} direction="up" duration={1} to={`../${segment.link}`}>
									{/* <Link to={`../${segment.link}`}> */}
									<Images className="images">
										<GatsbyImage className="photo" image={getImage(imageInstance.childImageSharp)} alt={segment.description} />
									</Images>
									{/* </Link> */}
								</AniLink>
							</Article>
						</Wrap>
					);
				}
			})}
		</Wrapper>
	);
};

export default WorksList;
const Wrapper = styled.div`
	//display: flex;
	//flex-wrap: wrap;
`;
const Wrap = styled.div`
	&:nth-child(2n-1) {
		background: #546e7b;
	}
	&:nth-child(2n-2) {
		background: #4e6673;
	}
	display: flex;
	@media screen and ${media.smallMax} {
		display: block;
	}
`;
const Content = styled.div`
	display: flex;
	align-content: center;
	flex-direction: column;
	justify-content: center;
	z-index: 2;
	padding: 2em ${colors.boxPaddingMd} 2em ${colors.boxPaddingMd};
	@media screen and ${media.smallMax} {
		padding: 2em ${colors.boxPaddingSm} 2em ${colors.boxPaddingSm};
	}
`;
const Title = styled.h2`
	display: inline-block;
	width: max-content;
	border-bottom: 2px solid ${colors.white};
	line-height: 3;
	font-size: 5vw;
	color: ${colors.white};
`;
const Description = styled.p`
	line-height: 1.5;
	font-size: 14px;
	color: ${colors.white};
	margin: 0;
`;
const Images = styled.div`
	position: relative;
	height: 100%;
	.photo {
		height: 100%;
	}
	&:after {
		transition-duration: 1s;
		opacity: 0.2;
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
		background: #000;
	}
	&:hover:after {
		opacity: 0;
		transition-duration: 1s;
	}
`;
const Article = styled.article`
	display: flex;
	width: 55%;
	// &:nth-child(4n-1),
	// &:nth-child(4n-2) {
	// 	width: 60%;
	// }
	&.first {
		width: 45%;
	}
	@media screen and ${media.xLarge} {
		width: 70%;
		&.first {
			width: 40%;
		}
	}
	@media screen and ${media.smallMax} {
		display: block;
		width: 100%;
		&.first {
			width: 100%;
		}
	}
`;
