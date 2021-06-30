import React from 'react';
import styled from 'styled-components';

const Demo = () => {
	return (
		<Msg>
			This is a demo project. Original website can be found at:
			<a href="https://andyhallphotographer.com/">https://andyhallphotographer.com/</a>
		</Msg>
	);
};
export default Demo;
const Msg = styled.p`
	margin: 0;
	padding: 1em 0 1em 1.5em;
	background: #8bc34a;
	color: #fff;
	a {
		color: #3f51b5;
		margin-left: 1em;
	}
`;
