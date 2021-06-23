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
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
	const pI = useStaticQuery(graphql`
		query {
			colOne: allFile(filter: { relativeDirectory: { eq: "published" } }, limit: 4, skip: 4) {
				edges {
					node {
						childImageSharp {
							gatsbyImageData(width: 400)
						}
					}
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
				<HeaderItem>
					<Title>Andy Hall Photographer</Title>
				</HeaderItem>

				<GalleryWrap>
					<Gallery>
						<GalleryBox ref={myRef} />
						{pI.colOne.edges.map((image, idx) => {
							return (
								<ImageBlock key={`${idx}sex2`}>
									<GatsbyImage image={getImage(image.node)} alt="beach" />
								</ImageBlock>
							);
						})}
					</Gallery>
				</GalleryWrap>
			</HeaderMain>
			<Description>
				<span>Andy hall</span> is based in london and has been a freelance photographer since 1989.Specializing in photo
				essays from home and abroad, his work has taken him on a wide range of commissioned news, portrait, landscape and
				social documentary features for numerous publications around the world.
			</Description>
		</>
	);
};

export default Header;

const HeaderMain = styled.div`
	display: grid;
	//grid-template-columns: 1fr 1fr;
	grid-template-columns: 1fr;
	max-width: 70vw;
	margin: 0 auto;
	gap: 22px;
	position: relative;
	@media ${media.xLarge} {
		grid-template-columns: 1fr;
	}
`;
const HeaderItem = styled.div`
	display: flex;
	flex-direction: column;
`;
const GalleryWrap = styled.div`
	height: 100vh;
	column-gap: 20px;
	overflow: hidden;
	padding: 20px;
	padding-right: 0;
	justify-content: center;
	@media ${media.mediumMax} {
		grid-template-columns: 1fr;
		height: auto;
	}
`;
const Title = styled.h1`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	font-size: 11vw;
	line-height: 1;
	background: #222;
	color: #eee;
	z-index: 9;

	@media ${media.xLarge} {
		position: relative;
		top: 0;
		transform: translateY(100%);
	}
`;
const Description = styled.p`
	max-width: 72vw;
	margin: 0 auto;
	//font-size: 1.4vw;
	line-height: 1.7;
	letter-spacing: 0.6px;
	font-size: 140%;
	span {
		font-size: 15vw;
		display: block;
	}
	@media ${media.smallMax} {
		margin: 41vh auto;
	}
	font-size: 140%;
	@media ${media.largeMax} {
		margin: 100vh auto;
	}
`;
const Gallery = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	flex-direction: column;
	row-gap: --20px;
	position: absolute;
	top: -4vw;
	z-index: -1;
`;
const GalleryBox = styled.div`
	background: #eee;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	opacity: 1;
	z-index: 2;
`;
const ImageBlock = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: #eee;
	&::after {
		//background: #eee;
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
	}
`;
