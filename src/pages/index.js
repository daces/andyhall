import React from 'react';
import Layout from '../components/layouts/layout';
import Navigation from '../components/nav/navigation';

import Header from '../components/header';
// import { graphql, useStaticQuery } from 'gatsby';
// import GallerySection from '../components/gallery';
import Projects from '../components/projects';
import ContactForm from '../components/contactForm';
import About from '../components/about';
import Demo from '../components/demo';
const Index = () => {
	return (
		<>
			<Layout title="Andy Hall Photographer" />
			<Demo />
			<Navigation />
			<Header />
			<Projects />
			<About />
			<ContactForm />
		</>
	);
};

export default Index;
