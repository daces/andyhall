import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
const Seen = () => {
	const myref3 = useRef(null);
	useEffect(() => {
		// const w = myref3.current;

		// const [x, xEnd] = 1 ? ['100%', (w.scrollWidth - myref3.current.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
		// gsap.fromTo(
		// 	w,
		// 	{ x },
		// 	{
		// 		x: xEnd,
		// 		scrollTrigger: {
		// 			trigger: myref3,
		// 			scrub: 0.5,
		// 		},
		// 	}
		// );
		gsap.fromTo(
			myref3.current,
			{ x: 0 },
			{
				x: '-60%',
				scrollTrigger: {
					trigger: myref3.current,
					scrub: 1,
				},
			}
		);
	}, []);
	return (
		<OutWrap>
			<h2>appeared in</h2>
			<Wrap ref={myref3}>
				<Magazine>
					• The Observer • the Guardian • the times magazine • the Sunday Times • the Sunday Telegraph • the Independent •
					New York Times Magazine • Red Bulletin Magazine • Newsweek • GQ Magazine • Der Speigel Magazine •
				</Magazine>
				{/* <Magazine>The Observer</Magazine>
			<Magazine>the Guardian</Magazine>
			<Magazine>the times magazine</Magazine>
			<Magazine>the Sunday Times</Magazine>
			<Magazine> the Sunday Telegraph</Magazine>
			<Magazine>the Independent</Magazine>
			<Magazine>New York Times Magazine</Magazine>
			<Magazine>Red Bulletin Magazine</Magazine>
			<Magazine>Newsweek</Magazine>
			<Magazine>GQ Magazine</Magazine>
			<Magazine>Der Speigel Magazine</Magazine> */}
			</Wrap>
		</OutWrap>
	);
};
export default Seen;
const OutWrap = styled.div`
	transform: rotateZ(-3deg);
	margin: 15vw auto;
	h2 {
		text-transform: capitalize;
		margin-left: 11vw;
		margin-bottom: 4vw;
		padding: 5vw 0;
		font-size: 4vw;
		max-width: 70vw;
	}
`;
const Wrap = styled.div`
	overflow-x: hidden;
	width: 590%;
	border-bottom: 1px solid rgb(164, 163, 163);
	padding: 4vw 0;
	background: #181818;
	color: #eeeeee;
`;
const Magazine = styled.span`
	text-transform: capitalize;
	font-size: clamp(4rem, 5vw, 8rem);
	line-height: 1;
	font-weight: 900;
}
`;
