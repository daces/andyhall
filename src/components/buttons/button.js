import React from 'react';
import styled from 'styled-components';
import { colors } from '../../defaults/styles';
const Button = () => {
	return (
		<>
			<Wrapper>
				<ButtonBtn>
					<p>
						<ButtonWrap>Click me!</ButtonWrap>
					</p>
				</ButtonBtn>
			</Wrapper>
		</>
	);
};
export default Button;
const ButtonWrap = styled.div``;
const Wrapper = styled.div`
	//background: url(https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60);
	background-repeat: no-repeat;
	background-size: cover;
	//height: 90vh;
	position: relative;
	//justify-content: center;
	//display: flex;
	//align-items: flex-end;
`;
const ButtonBtn = styled.button`
	border: none;
	font-family: inherit;
	font-size: inherit;
	color: inherit;
	background: none;
	cursor: pointer;
	padding: 15px 70px;
	display: inline-block;
	margin: 15px 30px;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: 700;
	outline: none;
	position: relative;
	background: ${colors.button};
	color: #fff;
	box-shadow: 0 6px ${colors.buttonShadow};
	border-radius: 5px;
	transition: none;
	&:hover {
		box-shadow: 0 4px ${colors.buttonShadow};
		top: 2px;
	}
	&:active {
		-webkit-transition: all 0.3s;
		-moz-transition: all 0.3s;
		transition: all 0.3s;
		box-shadow: 0 0 ${colors.buttonShadow};
		top: 6px;
	}
`;
