import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import gsap, { Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const GallerySection = () => {
	const pI = useStaticQuery(graphql`
		query {
			colOne: allFile(filter: { relativeDirectory: { eq: "published" } }, limit: 16, skip: 5) {
				edges {
					node {
						childImageSharp {
							gatsbyImageData(layout: CONSTRAINED)
						}
					}
				}
			}
		}
	`);

	const myElements = [];
	useEffect(() => {
		// let tl = new TimelineMax();
		// tl.staggerTo(myElements, 0.5, { x: 330, autoAlpha: 1 }, 0.1);
		myElements.forEach((container) => {
			// let image = container.querySelector('img');
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					markers: true,
					toggleActions: 'play none none none',
					// toggleActions: 'restart none none reset',
				},
			});

			//tl.set(container, { autoAlpha: 0 });
			// tl.fromTo(container, 1, { autoAlpha: 0 }, { autoAlpha: 1, ease: Expo.easeInOut }, 0).reverse();
			tl.to(container, 1, { autoAlpha: 1, scrub: true, ease: Expo.easeIn });
		}, []);

		let proxy = { skew: 0 },
			skewSetter = gsap.quickSetter(myElements, 'translateY', 'px'), // fast
			clamp = gsap.utils.clamp(-50, 50); // don't let the skew go beyond 20 degrees.

		ScrollTrigger.create({
			onUpdate: (self) => {
				let skew = clamp(self.getVelocity() / -300);
				// only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
				if (Math.abs(skew) > Math.abs(proxy.skew)) {
					proxy.skew = skew;
					gsap.to(proxy, {
						skew: 0,
						duration: 0.8,
						ease: 'power3',
						overwrite: true,
						onUpdate: () => skewSetter(proxy.skew),
					});
				}
			},
		});

		// make the right edge "stick" to the scroll bar. force3D: true improves performance
		gsap.set(myElements, { transformOrigin: 'right center', force3D: true });
	}, []);
	console.log(pI);
	const imgs = pI.colOne.edges;
	return (
		<GalleryContainer>
			<GalleryWrapper>
				{imgs.map((image, idx) => {
					return (
						<ImageContainer ref={(li) => (myElements[idx] = li)} key={`e2${idx}`}>
							<GatsbyImage
								//transformOptions={{ fit: 'cover' }}
								className={`image image${idx}`}
								image={getImage(image.node)}
								layout="constrained"
								alt="gallery house"
							/>
						</ImageContainer>
					);
				})}
			</GalleryWrapper>
		</GalleryContainer>
	);
};

export default GallerySection;
const GalleryContainer = styled.div`
	position: relative;
`;
const GalleryWrapper = styled.div`
	width: 70vw;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 5px;
	row-gap: 20px;
`;
const ImageContainer = styled.div`
	display: flex;
	opacity: 0;
	.image {
		//margin: 20px;
	}
	&:nth-child(odd) .image {
		//top: 0px;
		//left: -100px;
	}
	&:nth-child(even) .image {
		//top: 0px;
		//right: -100px;
	}
`;
