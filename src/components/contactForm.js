import React from 'react';
import styled from 'styled-components';

import { media } from '../defaults/media';
import { colors } from '../defaults/styles';
import Button from './buttons/button';
const ContactForm = () => {
	return (
		<Wrap id="conctact">
			<WrapInner>
				<FormWrap>
					<Name>
						<label htmlFor="name">Name</label>
						<input type="text" name="name" id="name"></input>
					</Name>
					<Email>
						<label htmlFor="email">Email</label>
						<input type="text" name="email" id="email"></input>
					</Email>
					<Message>
						<label htmlFor="message">Message</label>
						<textarea rows={6} type="text" name="message" id="message"></textarea>
					</Message>
					<Button>Send message</Button>
				</FormWrap>
				<SocialWrap>
					<Section>
						<div>
							<Img>
								<svg data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<path
										fill="#222"
										d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
									></path>
								</svg>
							</Img>
							<SocialContent>
								<SocialName>Email</SocialName>
								<SocialNetwork href="mailto:andz.hall@virgin.net">andz.hall@virgin.net</SocialNetwork>
							</SocialContent>
						</div>
					</Section>
					<Section>
						<div>
							<Img>
								<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="m13.839 13.84c-2.372 2.378-5.12 4.648-6.209 3.56-1.557-1.56-2.517-2.913-5.951-.155s-.796 4.598.712 6.106c1.74 1.74 8.226.091 14.64-6.32s8.06-12.898 6.32-14.64c-1.512-1.505-3.347-4.139-6.105-.711s-1.403 4.39.153 5.946c1.088 1.094-1.182 3.841-3.56 6.214z" />
								</svg>
							</Img>
							<SocialContent>
								<SocialName>Phone</SocialName>
								<SocialNetwork href="tel:+44(0)7976284338">+44 (0)79 7628 4338</SocialNetwork>
							</SocialContent>
						</div>
					</Section>
					<Section>
						<div>
							<Img>
								<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="m24 12h-3v12h-6v-9h-6v9h-6v-12h-3l12-12z" />
								</svg>
							</Img>
							<SocialContent>
								<SocialName>Address</SocialName>
								<SocialNetwork
									target="_blank"
									href="https://www.google.com/maps/place/45+Hopedale+Rd,+London+SE7+7JJ/@51.48074,0.0221316,17z/data=!3m1!4b1!4m5!3m4!1s0x47d8a849cd1bc9a1:0xe31244fcdcdf7a79!8m2!3d51.48074!4d0.0243203"
								>
									45 Hopedale Road
									<br />
									London SE7 7JH,
									<br />
									United Kingdom.
								</SocialNetwork>
							</SocialContent>
						</div>
					</Section>
				</SocialWrap>
			</WrapInner>

			<CopyRights>
				<p>2021 © andy hall</p>
			</CopyRights>
		</Wrap>
	);
};

const Wrap = styled.div`
	background: #607d8b;
	position: relative;
`;
const WrapInner = styled.div`
	display: grid;
	grid-template-columns: 60% 40%;
	@media screen and ${media.mediumMax} {
		display: block;
	}
`;
const FormWrap = styled.div`
	border-right: 1px solid rgba(212, 212, 255, 0.1);
	padding: 2em ${colors.boxPaddingMd} 0 ${colors.boxPaddingMd};
	@media screen and ${media.smallMax} {
		padding: 2em ${colors.boxPaddingSm} 0 ${colors.boxPaddingSm};
	}
	@media screen and ${media.mediumMax} {
		padding: 4em ${colors.boxPaddingSm} 2em ${colors.boxPaddingSm};
	}
	input,
	textarea {
		color: #fff;
		font-family: Source Sans Pro, Helvetica, sans-serif;
		font-size: 17pt;
		font-weight: 300;
		letter-spacing: 0.025em;
		line-height: 1.65;
	}
	label {
		color: #fff;
		display: block;
		font-size: 0.8em;
		font-weight: 600;
		letter-spacing: 0.25em;
		margin: 0 0 1em;
		text-transform: uppercase;
	}
	input,
	select {
		height: 2.75em;
	}
	input,
	select,
	textarea {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		background: rgba(212, 212, 255, 0.055);
		border: none;
		border-radius: 0;
		display: block;
		outline: 0;
		padding: 0 1em;
		text-decoration: none;
		width: 100%;
		resize: vertical;
	}
	textarea {
		padding: 0.75em 1em;
	}
`;
const SocialWrap = styled.div``;
const Name = styled.div`
	padding: 0 1em 0 0;
	width: 50%;
	float: left;
	margin: 0 0 2em;
	@media screen and ${media.mediumMax} {
		display: block;
		width: 100%;
		padding: 0;
		float: none;
	}
`;
const Email = styled.div`
	width: 50%;
	float: left;
	padding: 0 0 0 1em;
	margin: 0 0 2em;
	@media screen and ${media.mediumMax} {
		display: block;
		width: 100%;
		padding: 0;
		float: none;
	}
`;
const Message = styled.div`
	margin: 0 0 2em;
`;
const Section = styled.div`
	border-bottom: 1px solid rgba(212, 212, 255, 0.1);
	&:last-of-type {
		border-bottom: none;
	}
	padding: 4em ${colors.boxPaddingMd} 2em ${colors.boxPaddingMd};
	@media screen and ${media.smallMax} {
		padding: 4em ${colors.boxPaddingSm} 2em ${colors.boxPaddingSm};
	}
	& > div {
		position: relative;
		padding-left: 3.4em;
	}
`;
const Img = styled.div`
	position: absolute;
	left: 0;
	padding: 0.8em;
	background: white;
	display: inline;
	border-radius: 50%;
	float: left;
	margin-right: 20px;
	svg {
		width: 16px;
		vertical-align: sub;
	}
	@media screen and ${media.mediumMax} {
		margin-bottom: 20%;
	}
	&:last-of-type {
		margin-bottom: 30%;
	}
`;
const SocialContent = styled.div``;
const SocialName = styled.h4`
	font-size: 1.2em;
	font-family: sans-serif;
	font-weight: 600;
	line-height: 2;
	color: #fff;
	margin: 0;
`;
const SocialNetwork = styled.a`
	line-height: 2;
	color: #fff;
`;
const CopyRights = styled.div`
	padding: 2em;

	border-top: 1px solid rgba(212, 212, 255, 0.1);
	p {
		color: #fff;
		text-align: center;
	}
`;
export default ContactForm;
