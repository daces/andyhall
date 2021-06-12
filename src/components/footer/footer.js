import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { Fb, Yt, Twitter, Insta } from '../icons/icons';
import { colors } from '../../defaults/styles';
const navItems = ['Restourants', 'sports', 'Menu', 'What`s On', 'Our Story', 'contact', 'cariers'];

const Footer = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<Futer>
			<h1>
				<Link to="/">{data.site.siteMetadata.title}</Link>
			</h1>
			<FooterNav>
				<Navi>
					<ul>
						{navItems.map((link, idx) => {
							return (
								<li key={`${idx} + wdd24d`}>
									<NavLink
										to={`/${link
											.replace(/[^\w\s]/, '')
											.toLowerCase()
											.replace(/\s/, '-')}`}
									>
										{link}
									</NavLink>
								</li>
							);
						})}
					</ul>
				</Navi>
				<SocialNav>
					<Twitter></Twitter>
					<Fb></Fb>
					<Yt></Yt>
					<Insta></Insta>
				</SocialNav>
			</FooterNav>
			<FooterDesc>
				<FooterCopyR>
					Disclaimer: The reviews expressed on RateMyApprenticeship are those of members of the public and not those of the
					RateMyApprenticeship team or our affiliates.
				</FooterCopyR>
				<FooterText>© RMP Enterprise Ltd 2021</FooterText>
			</FooterDesc>
		</Futer>
	);
};
export default Footer;

const Futer = styled.div`
	background: ${colors.red300};
	padding-top: 2em;
	h1 {
		text-align: center;
	}

	h1 a {
		text-transform: uppercase;
	}
`;
const Navi = styled.nav`
	display: flex;
	text-align: right;
	padding: 10px 0;
	ul {
		display: table;
		table-layout: auto;
		width: 100%;
		li {
			display: table-cell;
			text-align: left;
			font-size: 1.4rem;
			line-height: 1.75rem;
		}
	}
	&:after,
	&:before {
		clear: both;
		content: '';
	}
`;
const NavLink = styled(Link)`
	color: ${colors.navigationLinks};
	font-size: 18px;
	vertical-align: middle;
`;
const FooterNav = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	position: relative;
	background: ${colors.red500};
	padding: 0 28px;
`;
const SocialNav = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 10px 0;
	svg {
		width: 25px;
		height: 25px;
		margin-left: 12px;
		fill: ${colors.navigationLinks};
	}
`;
const FooterCopyR = styled.div`
	display: flex;
	justify-content: start;
`;
const FooterText = styled.div`
	display: flex;
	justify-content: flex-end;
`;
const FooterDesc = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	background: #754f44;
	font-size: 16px;
	color: ${colors.white};
	width: 100%;
	padding: 20px 28px;
	margin: 0;
`;
