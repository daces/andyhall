import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { colors } from '../../defaults/styles';
import { media } from '../../defaults/media';

const navItems = ['#Projects', '#contact', 'bio', 'prints', 'zines'];

const Navigation = () => {
	const [menuStatus, setMenuStatus] = useState('');
	const [linkStatus, setlinkStatus] = useState('');

	const MenuOpen = () => {
		menuStatus === 'is-active' ? setMenuStatus('') : setMenuStatus('is-active');
	};
	const MenuClose = () => {
		setMenuStatus('');
	};
	const LinkClick = (e) => {
		setlinkStatus(e);
		console.log(e);
	};
	return (
		<Menu className={menuStatus}>
			<NavLogo bg="#222" direction="right" cover to="/" duration={1}>
				<h2>Andy Hall Photographer</h2>
			</NavLogo>
			{/* <NavLogo to="/">
				<h2>Andy Hall Photographer</h2>
			</NavLogo> */}
			{/* <StaticImage
					width={245}
					height={20}
					src="../../../src/images/logo_nav.png"
					alt="A dinosaur"
					placeholder="blurred"
				/> */}
			<Nav className={menuStatus}>
				<ul>
					{navItems.map((link, idx) => {
						if (link.includes('#') === true) {
							return (
								<li key={`${idx} + wdd24d`}>
									<NavLink
										className={linkStatus === idx ? 'is-active' : ''}
										to={`/${link
											.replace(/[^\w\s#]/, '')
											.toLowerCase()
											.replace(/\s/, '-')}`}
										onClick={(e) => {
											LinkClick(idx);
											MenuClose();
										}}
									>
										{link}
									</NavLink>
								</li>
							);
						} else
							return (
								<li key={`${idx} + wdd24d`}>
									<AniLink2
										bg="#222"
										direction="right"
										cover
										duration={1}
										className={linkStatus === idx ? 'is-active' : ''}
										to={`/${link
											.replace(/[^\w\s#]/, '')
											.toLowerCase()
											.replace(/\s/, '-')}/`}
										onClick={(e) => {
											LinkClick(idx);
											MenuClose();
										}}
									>
										{link}
									</AniLink2>
								</li>
							);
					})}
				</ul>
			</Nav>
			<MobiWrap className={menuStatus}>
				<MobiBtn1 className={menuStatus} onClick={MenuOpen}></MobiBtn1>

				<span className="menu-btn__open">Menu</span>
			</MobiWrap>
			{/* <MobiBtn className={menuStatus} onClick={MenuOpen}>
				<span className="line line--1"></span>
				<span className="line line--2"></span>
				<span className="line line--3"></span>
				<span className="menu-btn__open">Menu</span>
				<span className="menu-btn__close">Close</span>
			</MobiBtn> */}
		</Menu>
	);
};

export default Navigation;
const Menu = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 10;
	margin: 0;
	padding: 30px 0 30px 28px;
	background-color: ${colors.navigation};
	margin-left: 8vw;
	@media ${media.xLarge} {
		position: absolute;
		padding: 20px 0 20px 10px;
		background: none;
		&.is-active nav {
			-webkit-transform: translate3d(0, 0, 0);
			-moz-transform: translate3d(0, 0, 0);
			-ms-transform: translate3d(0, 0, 0);
			-o-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
		&.is-active nav li {
			opacity: 1;
			-webkit-transform: translate3d(0, 0, 0);
			-moz-transform: translate3d(0, 0, 0);
			-ms-transform: translate3d(0, 0, 0);
			-o-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
	}
	&.is-active h2 {
		background: ${colors.black700};
		color: ${colors.white};
	}
`;
const Nav = styled.nav`
	position: absolute;
	top: 50%;
	right: 0;
	width: 60%;
	text-align: right;
	font-size: 0;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	@media ${media.large} {
		font-size: 14px;
		line-height: 17.5px;
		font-size: 1.4rem;
		line-height: 1.75rem;
	}
	@media ${media.xLarge} {
		display: flex;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: ${colors.navigationFaded};
		-webkit-transition: transform 0.6s cubic-bezier(0.665, 0, 0.43, 1);
		-moz-transition: transform 0.6s cubic-bezier(0.665, 0, 0.43, 1);
		-ms-transition: transform 0.6s cubic-bezier(0.665, 0, 0.43, 1);
		-o-transition: transform 0.6s cubic-bezier(0.665, 0, 0.43, 1);
		transition: transform 0.6s cubic-bezier(0.665, 0, 0.43, 1);
		-webkit-transform: translate3d(0, -100%, 0);
		-moz-transform: translate3d(0, -100%, 0);
		-ms-transform: translate3d(0, -100%, 0);
		-o-transform: translate3d(0, -100%, 0);
		transform: translate3d(0, -100%, 0);
	}
	@media ${media.xLarge} {
		& li {
			padding-right: 0;
			-webkit-transform: translateY(-100%);
			-moz-transform: translateY(-100%);
			-ms-transform: translateY(-100%);
			-o-transform: translateY(-100%);
			transform: translateY(-100%);
		}
		a.is-active {
			border-bottom: 2px solid ${colors.white};
		}
	}
	ul {
		display: table;
		table-layout: auto;
		width: 100%;
		li {
			display: table-cell;
			text-align: center;
			font-size: 1.4rem;
			line-height: 1.75rem;
		}
	}

	@media ${media.xLarge} {
		& ul,
		ul li,
		& a {
			display: flex;
		}
		ul {
			flex-direction: column;
			height: 100%;
		}
		ul li {
			height: 100%;
			//opacity: 0;
		}
		.is-active li {
			//opacity: 1;
			-webkit-transform: translateY(-100%);
			-moz-transform: translateY(-100%);
			-ms-transform: translateY(-100%);
			-o-transform: translateY(-100%);
			transform: translateY(-100%);
		}
		& .is-active li {
			opacity: 1;
			-webkit-transform: translate3d(0, 0, 0);
			-moz-transform: translate3d(0, 0, 0);
			-ms-transform: translate3d(0, 0, 0);
			-o-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
			transition-duration: 1s;
		}
		& li:nth-child(1) {
			opacity: 0;
			-webkit-transition: all 0.1s cubic-bezier(0.665, 0, 0.43, 1) 0.1s;
			-moz-transition: all 0.1s cubic-bezier(0.665, 0, 0.43, 1) 0.1s;
			-ms-transition: all 0.1s cubic-bezier(0.665, 0, 0.43, 1) 0.1s;
			-o-transition: all 0.1s cubic-bezier(0.665, 0, 0.43, 1) 0.1s;
			transition: all 0.1s cubic-bezier(0.665, 0, 0.43, 1) 0.1s;

			//transition-delay: 0.5s;
		}
		& li:nth-child(2) {
			opacity: 0;
			-webkit-transition: all 0.2s cubic-bezier(0.665, 0, 0.43, 1) 0.2s;
			-moz-transition: all 0.2s cubic-bezier(0.665, 0, 0.43, 1) 0.2s;
			-ms-transition: all 0.2s cubic-bezier(0.665, 0, 0.43, 1) 0.2s;
			-o-transition: all 0.2s cubic-bezier(0.665, 0, 0.43, 1) 0.2s;
			transition: all 0.2s cubic-bezier(0.665, 0, 0.43, 1) 0.2s;
			//transition-delay: 0.6s;
		}
		& li:nth-child(3) {
			opacity: 0;
			-webkit-transition: all 0.3s cubic-bezier(0.665, 0, 0.43, 1) 0.3s;
			-moz-transition: all 0.3s cubic-bezier(0.665, 0, 0.43, 1) 0.3s;
			-ms-transition: all 0.3s cubic-bezier(0.665, 0, 0.43, 1) 0.3s;
			-o-transition: all 0.3s cubic-bezier(0.665, 0, 0.43, 1) 0.3s;
			transition: all 0.3s cubic-bezier(0.665, 0, 0.43, 1) 0.3s;
			//transition-delay: 0.7s;
		}
		& li:nth-child(4) {
			opacity: 0;
			-webkit-transition: all 0.4s cubic-bezier(0.665, 0, 0.43, 1) 0.4s;
			-moz-transition: all 0.4s cubic-bezier(0.665, 0, 0.43, 1) 0.4s;
			-ms-transition: all 0.4s cubic-bezier(0.665, 0, 0.43, 1) 0.4s;
			-o-transition: all 0.4s cubic-bezier(0.665, 0, 0.43, 1) 0.4s;
			transition: all 0.4s cubic-bezier(0.665, 0, 0.43, 1) 0.4s;
			//transition-delay: 0.8s;
			//transition: all 0.5s cubic-bezier(0.665, 0, 0.43, 1) 0.5s;
		}
		& li:nth-child(5) {
			opacity: 0;
			-webkit-transition: all 0.5s cubic-bezier(0.665, 0, 0.43, 1) 0.5s;
			-moz-transition: all 0.5s cubic-bezier(0.665, 0, 0.43, 1) 0.5s;
			-ms-transition: all 0.5s cubic-bezier(0.665, 0, 0.43, 1) 0.5s;
			-o-transition: all 0.5s cubic-bezier(0.665, 0, 0.43, 1) 0.5s;
			transition: all 0.5s cubic-bezier(0.665, 0, 0.43, 1) 0.5s;
			//transition-delay: 0.9s;
		}
		& li:nth-child(6) {
			opacity: 0;
			-webkit-transition: all 0.6s cubic-bezier(0.665, 0, 0.43, 1) 0.6s;
			-moz-transition: all 0.6s cubic-bezier(0.665, 0, 0.43, 1) 0.6s;
			-ms-transition: all 0.6s cubic-bezier(0.665, 0, 0.43, 1) 0.6s;
			-o-transition: all 0.6s cubic-bezier(0.665, 0, 0.43, 1) 0.6s;
			transition: all 0.6s cubic-bezier(0.665, 0, 0.43, 1) 0.6s;
			//transition-delay: 1s;
		}
		& li:nth-child(7) {
			opacity: 0;
			-webkit-transition: all 0.7s cubic-bezier(0.665, 0, 0.43, 1) 0.7s;
			-moz-transition: all 0.7s cubic-bezier(0.665, 0, 0.43, 1) 0.7s;
			-ms-transition: all 0.7s cubic-bezier(0.665, 0, 0.43, 1) 0.7s;
			-o-transition: all 0.7s cubic-bezier(0.665, 0, 0.43, 1) 0.7s;
			transition: all 0.7s cubic-bezier(0.665, 0, 0.43, 1) 0.7s;
			//transition-delay: 1.1s;
		}
		& li:nth-child(8) {
			opacity: 0;
			-webkit-transition: all 0.8s cubic-bezier(0.665, 0, 0.43, 1) 0.8s;
			-moz-transition: all 0.8s cubic-bezier(0.665, 0, 0.43, 1) 0.8s;
			-ms-transition: all 0.8s cubic-bezier(0.665, 0, 0.43, 1) 0.8s;
			-o-transition: all 0.8s cubic-bezier(0.665, 0, 0.43, 1) 0.8s;
			transition: all 0.8s cubic-bezier(0.665, 0, 0.43, 1) 0.8s;
			//transition-delay: 1.2s;
		}
		& li:nth-child(9) {
			transition-delay: 1.3s;
		}
		& li:nth-child(10) {
			transition-delay: 1.4s;
		}
		& a {
			flex: 1;
			justify-content: center;
			align-items: center;
			font-size: 26px;
			line-height: 32.5px;
			font-size: 2.6rem;
			line-height: 3.25rem;
			display: flex;
		}
	}
`;
const NavLogo = styled(AniLink)`
	//vertical-align: middle;
	border-bottom: 2px solid transparent;
	color: ${colors.navigationLinks};
	text-decoration: none;
	text-transform: Capitalize;
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		padding: 0;
	}
	h2 {
		-webkit-writing-mode: vertical-lr;
		writing-mode: vertical-lr;
		position: absolute;
		top: 16vh;
		top: 0;
		left: -2px;
		bottom: 0;
		height: 100vh;
		z-index: 3;
		padding: 0 2vw;
		padding-top: 18vh;
		// margin-left: -5vw;
		transform: translateX(-50%);
	}
	@media ${media.largeMax} {
		h2 {
			background: #fff;
			box-shadow: 0 0 20px 0px #cacaca;
		}
	}
`;

const AniLink2 = styled(AniLink)`
	font-weight: normal;
	padding: 10px 0;
	border-bottom: 2px solid transparent;
	color: ${colors.navigationLinks};
	text-decoration: none;
	text-transform: uppercase;
	font-family: 'satisfy';
	font-weight: bold;
	&.is-active {
	}
`;

const NavLink = styled(Link)`
	font-weight: normal;
	padding: 10px 0;
	border-bottom: 2px solid transparent;
	color: ${colors.navigationLinks};
	text-decoration: none;
	text-transform: uppercase;
	font-family: 'satisfy';
	font-weight: bold;
	&.is-active {
	}
`;
// const MobiBtn = styled.a`
// 	@media ${media.xLarge} {
// 		display: block;
// 	}
// 	position: absolute;
// 	top: 24px;
// 	right: 24px;
// 	z-index: 1;
// 	display: none;
// 	width: 32px;
// 	cursor: pointer;
// 	font-size: 10px;
// 	line-height: 12.5px;
// 	font-size: 1rem;
// 	line-height: 1.25rem;
// 	text-align: center;
// 	text-transform: uppercase;
// 	color: ${colors.navigationLinks};

// 	.line {
// 		display: block;
// 		width: 100%;
// 		height: 4px;
// 		margin: 4px auto;
// 		background-color: ${colors.navigationLinks};
// 		-webkit-transition: all 0.5s cubic-bezier(0.665, 0, 0.43, 1);
// 		-moz-transition: all 0.5s cubic-bezier(0.665, 0, 0.43, 1);
// 		-ms-transition: all 0.5s cubic-bezier(0.665, 0, 0.43, 1);
// 		-o-transition: all 0.5s cubic-bezier(0.665, 0, 0.43, 1);
// 		transition: all 0.5s cubic-bezier(0.665, 0, 0.43, 1);
// 	}
// 	.menu-btn__open,
// 	.menu-btn__close {
// 		position: relative;
// 		top: 3px;git
// 	}
// 	.menu-btn__close {
// 		display: none;
// 	}
// 	&.is-active .line--1 {
// 		-webkit-transform: rotate(45deg) translate3d(7px, 6px, 0);
// 		-moz-transform: rotate(45deg) translate3d(7px, 6px, 0);
// 		-ms-transform: rotate(45deg) translate3d(7px, 6px, 0);
// 		-o-transform: rotate(45deg) translate3d(7px, 6px, 0);
// 		transform: rotate(45deg) translate3d(7px, 6px, 0);
// 	}
// 	&.is-active .line--2 {
// 		opacity: 0;
// 	}
// 	&.is-active .line--3 {
// 		-webkit-transform: rotate(-45deg) translate3d(5px, -4px, 0);
// 		-moz-transform: rotate(-45deg) translate3d(5px, -4px, 0);
// 		-ms-transform: rotate(-45deg) translate3d(5px, -4px, 0);
// 		-o-transform: rotate(-45deg) translate3d(5px, -4px, 0);
// 		transform: rotate(-45deg) translate3d(5px, -4px, 0);
// 	}
// 	&.is-active .menu-btn__open {
// 		display: none;
// 	}
// 	&.is-active .menu-btn__close {
// 		display: block;
// 	}
// `;
const MobiWrap = styled.div`
	@media ${media.xLarge} {
		display: block;
	}
	display: none;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	z-index: 9;

	&.is-active span {
		color: ${colors.white};
	}
	.menu-btn__open,
	.menu-btn__close {
		position: relative;
		top: 8vh;
		right: 18px;
		text-transform: lowercase;
	}
`;
const MobiBtn1 = styled.a`
	position: absolute;
	top: 24px;
	right: 24px;
	width: 28px;
	height: 28px;
	display: inline-block;
	background: #eee;
	border-radius: 50%;
	overflow: hidden;
	transform: translateZ(0);
	&::after {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		content: '';
		background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='38' fill='%2354595f' fill-rule='evenodd'%3E%3Cpath d='M21.5 12.938L25 19l-3.5 6.062h-7L11 19l3.5-6.062z'/%3E%3Cpath d='M18 24h18v1H18zM0 13h18v1H0zm13.67 8.5l9 15.588-.866.5-9-15.588zM14.196.412l9 15.588-.866.5-9-15.588zM13.67 16.5l-9 15.588-.866-.5 9-15.588zM32.196 6.412l-9 15.588-.866-.5 9-15.588z'/%3E%3C/svg%3E")
			no-repeat center;
		background-size: cover;
		transition: transform ease 0.3s;
		border-radius: 50%;
		overflow: hidden;
		transform: scale(1.5);
	}

	&:hover::after {
		transform: scale(0.4);
	}

	&:active {
		transform: scale(1);
	}
`;
