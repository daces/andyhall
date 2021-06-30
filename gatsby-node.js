const path = require('path');
exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	return new Promise((resolve, reject) => {
		const blogPostTemplate = path.resolve('src/templates/blog-template.js');
		resolve(
			graphql(`
				{
					allDirectory {
						edges {
							node {
								relativePath
							}
						}
					}
				}
			`).then((blog) => {
				if (blog.errors) {
					reject(blog.errors);
				}
				blog.data.allDirectory.edges.forEach((edge) => {
					createPage({
						path: '/' + edge.node.relativePath,
						component: blogPostTemplate,
						context: {
							slug: edge.node.relativePath,
						},
					});
				});
				return;
			})
		);
	});
};
