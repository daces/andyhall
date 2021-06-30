import React from 'react';
import Layout from '../components/layouts/layout';
import Navigation from '../components/nav/navigation';
// import Button from '../components/buttons/button';

import Header from '../components/header';
// import { graphql, useStaticQuery } from 'gatsby';
// import GallerySection from '../components/gallery';
import WorksList from '../components/works';
import ContactForm from '../components/contactForm';
import Demo from '../components/demo';

const Works = () => {
	return (
		<>
			<Layout title="Andy Hall Photographer" />
			<Demo />
			<Navigation />
			<Header />
			<WorksList />
			<ContactForm />
		</>
	);
};

export default Works;
