require('dotenv').config();
module.exports = {
	flags: {
		DEV_SSR: true,
	},
	siteMetadata: {
		title: 'Andy Hall Photographer',
		description: `
		Andy has contributed to numerous exhibitions on subjects such as ; Angola, South Africa – the last days of
		apartheid, as well as Oxfam-sponsored exhibitions on the indian ocean tsunami, poverty and the arms trade
		`,
		siteUrl: 'https://andyhallphotographer.com',
		image: 'https://andyhallphotographer.com/logo.jpg',
		author: {
			name: 'Andy Hall Photographer',
			minibio: `
			Andy hall is based in london and has been a freelance photographer since 1989.Specializing in photo essays from
					home and abroad, his work has taken him on a wide range of commissioned news, portrait, landscape and social
					documentary features for numerous publications around the world.
		  `,
		},
		organization: {
			name: 'Andy Hall Photographer',
			url: 'https://andyhallphotographer.com',
			logo: 'https://andyhallphotographer.com/logo.jpg',
		},
		social: {
			twitter: '@ahall',
			fbAppID: '',
		},
		categories: [
			{
				slug: 'test',
				name: 'Test Category',
			},
		],
	},
	plugins: [
		'styled-components',
		'@emotion/core',
		'@emotion/react',
		'gatsby-plugin-styled-components',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-transition-link',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `product`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				typekit: {
					id: process.env.TYPEKIT_ID,
				},
			},
		},
	],
};
