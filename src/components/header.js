import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
// import { StaticImage } from 'gatsby-plugin-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import gsap, { Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { media } from '../defaults/media';
import { useEffect } from 'react';
import { useRef } from 'react';
import { colors } from '../defaults/styles';
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
	const pI = useStaticQuery(graphql`
		query {
			header: file(relativePath: { eq: "published/City-of-London1 (1).jpg" }) {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED)
				}
			}
		}
	`);
	// const [myScroll, setmyScroll] = useState(0);
	let myRef = useRef([]);
	// let myRef2 = useRef(null);
	useEffect(() => {
		gsap.to(myRef.current, {
			y: '-100%',
			delay: 1,
			ease: Expo.easeInOut,
		});
	}, []);

	return (
		<>
			<HeaderMain>
				{/* <GalleryBox ref={myRef} /> */}
				<ImageBlock>
					<GatsbyImage image={getImage(pI.header.childImageSharp)} alt="beach" />

					<ContentBox>
						<Title>Andy Hall</Title>
						<Description>
							is based in london and has been a freelance photographer since 1989. Specializing in photo essays from home and
							abroad, his work has taken him on a wide range of commissioned news, portrait, landscape and social documentary
							features for numerous publications around the world.
						</Description>
					</ContentBox>
				</ImageBlock>
			</HeaderMain>
		</>
	);
};

export default Header;

const HeaderMain = styled.div`
	display: grid;
	//grid-template-columns: 1fr 1fr;
	grid-template-columns: 1fr;
	gap: 22px;
	position: relative;
	@media ${media.xLarge} {
		grid-template-columns: 1fr;
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
	padding: 60px ${colors.boxPaddingMd} 0 ${colors.boxPaddingMd};
	@media screen and ${media.smallMax} {
		padding: 60px ${colors.boxPaddingSm} 0 ${colors.boxPaddingSm};
	}
	@media screen and ${media.mediumMax} {
		top: 0;
		left: 0;
		transform: none;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 52vh;
		padding: 60px ${colors.boxPaddingSm} 2em ${colors.boxPaddingSm};
	}
`;
const Title = styled.h1`
	font-size: 6vw;
	line-height: 2;
	color: ${colors.white};
	z-index: 9;
	padding-bottom: 0;
	border-bottom: 2px solid ${colors.white};
`;
const Description = styled.p`
	max-width: 72vw;
	//font-size: 1.4vw;
	line-height: 1.7;
	letter-spacing: 0.6px;
	font-size: 130%;
	color: ${colors.white};
	span {
		font-size: 6vw;
		display: block;
	}
	@media screen and ${media.mediumMax} {
		font-size: 100%;
		line-height: 1.5em;
		height: 6em;
		overflow: hidden;
	}
`;
const ImageBlock = styled.div`
	position: relative;
	@media screen and ${media.mediumMax} {
		div:first-of-type {
			height: 70vh;
		}
	}
	&::after {
		background: #607d8b;
		opacity: .5;
		//background: linear-gradient(
			84deg,
			rgba(238, 238, 238, 1) -54%,
			rgba(255, 255, 255, 0.01242) 75%,
			rgba(238, 238, 238, 1) 110%
		);
		//background: radial-gradient(
			circle,
			rgba(238, 238, 238, 0) 34%,
			rgba(238, 238, 238, 1) 76%,
			rgba(238, 238, 238, 1) 100%
		);
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
	}
`;
