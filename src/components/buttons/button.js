import React from 'react';
import styled from 'styled-components';
const Button = (props) => {
	return <ButtonBtn href={props.href}>{props.children}</ButtonBtn>;
};
export default Button;

const ButtonBtn = styled.span`
	& {
		-webkit-text-size-adjust: none;
		list-style: none;
		box-sizing: border-box;
		margin: 0;
		font: inherit;
		vertical-align: baseline;
		appearance: none;
		transition: background 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
		background: transparent;
		border: 0;
		border-radius: 0;
		box-shadow: inset 0 0 0 2px #fff;
		color: #fff;
		cursor: pointer;
		display: inline-block;
		font-size: 0.8em;
		font-weight: 600;
		height: 3.5em;
		letter-spacing: 0.25em;
		line-height: 3.5em;
		padding: 0 1.75em;
		text-align: center;
		text-decoration: none;
		text-transform: uppercase;
		white-space: nowrap;
		margin-top: 20px;
		width: min-content;
	}
	&:hover {
		box-shadow: inset 0 0 0 2px #abf3ff;
		color: #abf3ff;
	}
	&:active {
		-webkit-transition: all 0.3s;
		-moz-transition: all 0.3s;
		transition: all 0.3s;
		background: '#607d8b';
		color: '#fff';
	}
`;
