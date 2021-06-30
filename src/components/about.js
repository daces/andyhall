import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './buttons/button';
import { media } from '../defaults/media';
import { colors } from '../defaults/styles';
const About = () => {
	const [showMore, setShowMore] = useState({});
	function readMore() {
		if (showMore.overflow === 'VISIBLE') {
			setShowMore({
				maxHeight: '50vh',
				overflow: 'hidden',
			});
		} else {
			setShowMore({
				maxHeight: '150vh',
				overflow: 'VISIBLE',
			});
		}
	}
	//const targetRef = useRef();
	// experimenting with animating height
	// const [dimensions, setDimensions] = useState({ height: 0 });
	// useLayoutEffect(() => {
	// 	if (targetRef.current) {
	// 		setDimensions({
	// 			height: targetRef.current.offsetHeight,
	// 		});
	// 	}
	// }, []);
	return (
		<Wrap>
			<WrapInner style={showMore}>
				<Title>Andy Hall</Title>
				<Desc>
					Andy hall is based in london and has been a freelance photographer since 1989.Specializing in photo essays from
					home and abroad, his work has taken him on a wide range of commissioned news, portrait, landscape and social
					documentary features for numerous publications around the world.
				</Desc>
				<Desc>
					Publications his work has appeared in, include: The Observer and the Guardian newspapers and magazines (contract
					photographer), the times magazine and the Sunday Times, the Sunday Telegraph, the Independent and Independent on
					Sunday, New York Times Magazine, Red Bulletin Magazine, Newsweek, GQ Magazine and Der Speigel Magazine.
				</Desc>
				<Desc>
					Andy’s commercial clients include Transport for London, and he has also worked as a stills photographer for Film
					Four, and Channel Four. Throughout his career, Andy has worked for aid agencies and NGO’s including Oxfam, Save the
					Children and Action Aid. Andy also works on a regular basis with UNHCR.
				</Desc>
				<Desc>
					Andy has contributed to numerous exhibitions on subjects such as ; Angola, South Africa – the last days of
					apartheid, as well as Oxfam-sponsored exhibitions on the indian ocean tsunami, poverty and the arms trade, and
					‘After the thaw’- an exhibition on the former Soviet Republics 20 years on. His portraits of film directors and
					celebrities have been shown in numerous getty-sponsored exhibitions around the world.
				</Desc>
				<Desc>
					Andy has collaborated in book projects ranging from “montreal – eye on the metropolis”(2000), to the british press
					photography anthology – “Eyewitness; five thousand days”(2004), “Muhammad Ali – the glory years”(2002), as well as
					the book project “UK at home”(2008). His commissioned work on the ongoing hunger crisis in sub-saharan Africa was
					screened at visa pour L’image, Perpignan in 2012.
				</Desc>
				<Desc>
					Andy is an established street photographer with a growing reputation, having had his work published in specialist
					magazines such as PDN (Photo District News) and Eyeshot magazine. He is also one of the winners of the PDN
					sponsored “Best of Street Photography 2016”, and has given talks on his work in the Street London Festival in 2017,
					and on Radio London in 2018, as well as running street photography workshops and judging street photography
					competitions on the “Photocrowd” photography website.
				</Desc>
				<Desc>Andy was recently awarded series finalist in the Brussels Street Photography Festival 2019.</Desc>

				<Btn onClick={readMore}>
					<Button>Read More</Button>
				</Btn>
				{/* {console.log(dimensions.height)} */}
			</WrapInner>
		</Wrap>
	);
};
const Btn = styled.button`
	display: block;
	width: 100%;
	background: #6b8694;
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translate(-50%);
	margin: 0;
	outline: 0;
	border: none;
	padding-bottom: 2em;
`;
const Wrap = styled.div`
	background: #6b8694;
	color: white;
`;
const WrapInner = styled.div`
	transition-duration: 1s;
	position: relative;
	margin: 0 auto;
	max-width: 60em;
	padding: 60px ${colors.boxPaddingMd} 0 ${colors.boxPaddingMd};
	@media screen and ${media.smallMax} {
		padding: 60px ${colors.boxPaddingSm} 0 ${colors.boxPaddingSm};
	}
	@media screen and ${media.mediumMax} {
		padding: 4em ${colors.boxPaddingSm} 0 ${colors.boxPaddingSm};
		width: 100%;
	}

	line-height: 1.5em;
	max-height: 50vh;
	overflow: hidden;
`;
const Title = styled.h1`
	display: inline-block;
	border-bottom: 2px solid #fff;
	line-height: 2;
`;
const Desc = styled.p`
	line-height: 1.5;
`;
export default About;
