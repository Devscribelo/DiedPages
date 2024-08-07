import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DA1aD2N3.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"img1":"background-image: url(\"/biography/1.jpeg\");","img2":"background-image: url(\"/biography/2.jpeg\");","img3":"background-image: url(\"/biography/3.jpeg\");","img4":"background-image: url(\"/biography/4.jpeg\");"};
				const file = "C:/Users/Jose/Documents/diedpages/DiedPages/src/content/gallerysection/gallerysection.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
