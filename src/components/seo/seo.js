import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = ({ title, url, description, image, isBlogPost }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					description
					image
					organization {
						name
						url
						logo
					}
					siteUrl
					social {
						twitter
						fbAppID
					}
					title
				}
			}
		}
	`);
	const seo = data.site.siteMetadata;

	if (isBlogPost === true) {
		seo.title = title;
		seo.description = description;
		seo.image = image;
		seo.url = seo.organization.url + url;
	}
	return (
		<>
			<Helmet>
				{/* General tags */}
				<title>{seo.title}</title>
				<meta name="description" content={seo.description} />
				<meta name="image" content={seo.image} />
				<link rel="canonical" href={seo.url} />

				{/* OpenGraph tags */}
				<meta property="og:url" content={seo.url} />
				{isBlogPost ? <meta property="og:type" content="article" /> : null}
				<meta property="og:title" content={seo.title} />
				<meta property="og:description" content={seo.description} />
				<meta property="og:image" content={seo.image} />
				<meta property="fb:app_id" content={seo.social.fbAppID} />

				{/* Twitter Card tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content={seo.social.twitter} />
				<meta name="twitter:title" content={seo.title} />
				<meta name="twitter:description" content={seo.description} />
				<meta name="twitter:image" content={seo.image} />
			</Helmet>
		</>
	);
};
export default Seo;
