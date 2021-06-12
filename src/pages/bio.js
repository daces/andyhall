import React from 'react';
import Layout from '../components/layouts/layout';
import styled from 'styled-components';
import { media } from '../defaults/media';
import Navigation from '../components/nav/navigation';

const Bio = () => {
	return (
		<>
			<Layout />
			<Navigation />
			<Wrap>
				<p>
					Andy hall is based in london and has been a freelance photographer since 1989.Specializing in photo essays from
					home and abroad, his work has taken him on a wide range of commissioned news, portrait, landscape and social
					documentary features for numerous publications around the world.
				</p>
				<p>
					Publications his work has appeared in, include: The Observer and the Guardian newspapers and magazines (contract
					photographer), the times magazine and the Sunday Times, the Sunday Telegraph, the Independent and Independent on
					Sunday, New York Times Magazine, Red Bulletin Magazine, Newsweek, GQ Magazine and Der Speigel Magazine.
				</p>
				<p>
					Andy’s commercial clients include Transport for London, and he has also worked as a stills photographer for Film
					Four, and Channel Four. Throughout his career, Andy has worked for aid agencies and NGO’s including Oxfam, Save the
					Children and Action Aid. Andy also works on a regular basis with UNHCR.
				</p>
				<p>
					Andy has contributed to numerous exhibitions on subjects such as ; Angola, South Africa – the last days of
					apartheid, as well as Oxfam-sponsored exhibitions on the indian ocean tsunami, poverty and the arms trade, and
					‘After the thaw’- an exhibition on the former Soviet Republics 20 years on. His portraits of film directors and
					celebrities have been shown in numerous getty-sponsored exhibitions around the world.
				</p>
				<p>
					Andy has collaborated in book projects ranging from “montreal – eye on the metropolis”(2000), to the british press
					photography anthology – “Eyewitness; five thousand days”(2004), “Muhammad Ali – the glory years”(2002), as well as
					the book project “UK at home”(2008). His commissioned work on the ongoing hunger crisis in sub-saharan Africa was
					screened at visa pour L’image, Perpignan in 2012.
				</p>
				<p>
					Andy is an established street photographer with a growing reputation, having had his work published in specialist
					magazines such as PDN (Photo District News) and Eyeshot magazine. He is also one of the winners of the PDN
					sponsored “Best of Street Photography 2016”, and has given talks on his work in the Street London Festival in 2017,
					and on Radio London in 2018, as well as running street photography workshops and judging street photography
					competitions on the “Photocrowd” photography website.
				</p>
				<p>Andy was recently awarded series finalist in the Brussels Street Photography Festival 2019.</p>
				<br />
				<h3>Andy’s portfolio is available on request. </h3>
				<p>Contact details: +44(0)7976284338</p> <p>Email: Andz.hall@virgin.net</p> <p>www.andyhallphotographer.com</p>
				<p>45 Hopedale Road London SE7 7JH, United Kingdom.</p>
			</Wrap>
		</>
	);
};
export default Bio;

const Wrap = styled.div`
	max-width: 70vw;
	margin-left: auto;
	@media ${media.xLarge} {
		margin-left: 18vw;
		max-width: 100%;
	}
	h1 {
		font-size: 12vw;
	}
`;
