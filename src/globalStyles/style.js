import React from 'react';
import { Global, css } from '@emotion/react';
import { font } from '../defaults/fonts';
import { colors } from '../defaults/styles';
// import { colors } from '../defaults/styles';
const GlobalCss = () => {
	return (
		<>
			<Global
				styles={css`
					*,
					*:after,
					*:before {
						-webkit-box-sizing: border-box;
						-moz-box-sizing: border-box;
						box-sizing: border-box;
					}
					html {
						background: ${colors.white};
						${font.heading};
						//font-family: 'Source Serif 4 Display';
						font-size: 62.5%;
						line-height: 62.5%;
						padding: 0;
						margin: 0;
						-webkit-text-size-adjust: 100%;
						-ms-text-size-adjust: 100%;
						overflow-x: hidden;
					}
					body {
						background-color: #6b8694;
						margin: 0 auto;
						min-width: 320px;
						min-height: 100vh;
						font-size: 16px;
						line-height: 15px;
						//font-size: 1.2rem;
						line-height: 1.5rem;
						overflow: hidden;
					}
					h1,
					h2,
					h3,
					h4,
					h5,
					h6 {
						font-family: 'Source Serif 4 Display';
						font-weight: normal;
						word-wrap: break-word;
						font-kerning: normal;
						line-height: 1.3rem;
					}
					a {
						text-decoration: none;
					}
					nav ul,
					nav ol,
					ul,
					ol {
						list-style: none;
						list-style-image: none;
						margin: 0;
						padding: 0;
					}
					.boci img {
						max-width: 100%;
						width: 100%;
						height: 100%;
						display: block;
						object-fit: cover;
						transform-origin: left;
					}
					.image-gal #gatsby-focus-wrapper img {
						transition: transform 0.2s ease-in-out, transform 0.2s ease-in-out;
					}
					.image-gal #gatsby-focus-wrapper img:hover {
						transform: translate3d(-28px, 0px, 0px) scale3d(1.14995, 1.14995, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
							skew(0deg, 0deg);
						transform-style: preserve-3d;
						will-change: transform;
						z-index: 999;
					}
					.tl-edges {
						overflow: hidden !important;
					}
				`}
			/>
		</>
	);
};
export default GlobalCss;
