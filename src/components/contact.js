//import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { media } from '../defaults/media';
import { colors } from '../defaults/styles';

const Contact = () => {
	return (
		<Wrapper id="contact">
			<ContactList>
				<a href="mailto:Andz.hall@virgin.net">
					<li>Email</li>
				</a>
				<a href="tel:+44-79-7628-4338">
					<li>Phone</li>
				</a>
				<a href="https://www.instagram.com/andyxhall/">
					<li>instagram</li>
				</a>
				<span className="address" href="">
					<li>address</li>
				</span>
			</ContactList>
		</Wrapper>
	);
};

export default Contact;
const Wrapper = styled.div`
	max-width: 70vw;
	margin: 0 auto;
	@media ${media.xLarge} {
		margin: 10vw 6vw;
		max-width: 100%;
	}
`;
const ContactList = styled.ul`
	position: relative;
	margin-top: 20vw;
	text-align: center;
	li {
		text-transform: uppercase;
		display: inline-block;
		font-size: 3rem;
		transform: rotate(-49deg);
		transition: transform 0.4s ease;
		width: 80px;
	}
	li:hover {
		transform: rotate(-49deg) scale(2);
		color: #333;
	}
	a {
		color: ${colors.gray600};
	}
	.address:hover::after {
		content: '45 Hopedale Road London SE7 7JH, United Kingdom';
		background: ${colors.base};
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		display: block;
		padding: 10px;
	}
	@media ${media.xLarge} {
		& {
			text-align: center;
		}
		li {
			text-align: center;
			font-size: 2rem;
		}
	}
`;
