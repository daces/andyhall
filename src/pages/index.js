import React from 'react';
import Layout from '../components/layouts/layout';
import Navigation from '../components/nav/navigation';
// import Button from '../components/buttons/button';

import Header from '../components/header';
// import { graphql, useStaticQuery } from 'gatsby';
// import GallerySection from '../components/gallery';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Seen from '../components/seen';

const Index = () => {
	return (
		<>
			<Layout title="Andy Hall Photographer" />
			<Navigation />
			<Header />
			<Seen />
			<Projects />
			<Contact />
		</>
	);
};

export default Index;
