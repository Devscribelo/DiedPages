import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B3QzBHf3.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"img":"background-image: url(\"https://i.ibb.co/RPSPcMg/2a40b8d8-7165-43f5-98ac-62ee4bce17cc.jpg\");","name":"Ella Mae Johnson","birthyear":1928,"deathyear":2022,"biography":"Ella Mae was born in Montgomery, Alabama in 1928. She was the first African American woman to work as a streetcar conductor in Montgomery. She married Robert Johnson and had 3 children. Ella Mae was an active member of her church and community. She was known for her kindness and generosity."};
				const file = "C:/Users/Jose/Documents/diedpages/DiedPages/src/content/biography/biography.md";
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
