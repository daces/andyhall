import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalCss from '../../globalStyles/style';
const Layout = ({ title }) => {
	return (
		<>
			<Helmet key="app-head" titleTemplate="%s" defaultTitle="Andy Hall">
				<html lang="en" />
				<link rel="preconnect" href="https://typekit.com" />
				<link rel="preconnect" href="https://use.typekit.net" />
				<link rel="preconnect" href="https://p.typekit.net" />

				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>{title}</title>

				{/* Favicon stuff from realfavicongenerator.net */}
				<meta name="apple-mobile-web-app-title" content="andyhallphotographer.com" />
				<meta name="application-name" content="andyhallphotographer.com" />
				<meta name="theme-color" content="#fff" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fff" />

				{/* Hosted webfonts because I can’t self-host Mallory 😭 */}
			</Helmet>
			<GlobalCss />
		</>
	);
};
export default Layout;
