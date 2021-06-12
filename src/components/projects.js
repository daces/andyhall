import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { media } from '../defaults/media';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
const Projects = () => {
	const data = useStaticQuery(graphql`
		query {
			allDirectory {
				edges {
					node {
						relativePath
					}
				}
			}
		}
	`);
	return (
		<Wrapper id="projects">
			<ProjectTitle>Projects</ProjectTitle>
			<ProjectList>
				{data.allDirectory.edges.map((edge, idx) => {
					if (edge.node.relativePath !== '' && edge.node.relativePath !== 'published') {
						return (
							<AniLink bg="#222" duration={1} direction="right" cover key={`project${idx}`} to={edge.node.relativePath}>
								<li>{edge.node.relativePath.replace('published/', '')}</li>
							</AniLink>
						);
					}
					return null;
				})}
			</ProjectList>
		</Wrapper>
	);
};

export default Projects;
const Wrapper = styled.div`
	max-width: 70vw;
	margin: 0 auto;
	@media ${media.xLarge} {
		margin: 0 6vw;
		max-width: 100%;
	}
`;
const ProjectTitle = styled.h2`
	padding: 5vw 0;
	font-size: 4vw;
	margin-left: -4vw;
	transform: rotateZ(-3deg);
	@media ${media.xLarge} {
		margin-left: 0;
	}
`;
const ProjectList = styled.ul`
	a {
		color: #a4a3a3;
		display: block;
		transform: rotateZ(-3deg);

		transition: padding-left, color, transform 0.4s ease;
	}
	a:first-of-type li {
		border-top: 1px solid #7b7b7b;
	}
	li {
		font-size: 8.8rem;
		font-family: 'tk-satisfy-n4';
		line-height: 1.1;
		padding: 50px 0;
		letter-spacing: 2px;
		text-transform: uppercase;
		border-bottom: 1px solid #7b7b7b;
	}
	a:hover {
		transform: translateX(10px);
		padding-left: 4vw;
		color: #333;
	}
	@media ${media.xLarge} {
		li {
			font-size: 10vw;
		}
	}
`;
