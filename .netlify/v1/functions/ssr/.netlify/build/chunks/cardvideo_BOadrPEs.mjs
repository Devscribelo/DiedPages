import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DA1aD2N3.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"video1":"https://www.youtube.com/embed/dQw4w9WgXcQ","video2":"https://www.youtube.com/embed/3JZ_D3ELwOQ","video3":"https://www.youtube.com/embed/ZXsQAXx_ao0","video4":"https://www.youtube.com/embed/lY2H2ZP56K4"};
				const file = "C:/Users/Jose/Documents/diedpages/DiedPages/src/content/CardVideo/cardvideo.md";
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
