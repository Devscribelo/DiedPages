import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DA1aD2N3.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"logo":"/logo.png","name":"Memorialize","link1":"/","namelink1":"Inicio","link2":"/galeria","namelink2":"Fotos","link3":"/videos","namelink3":"Videos","link4":"#","namelink4":"Mensajes"};
				const file = "C:/Users/Jose/Documents/diedpages/DiedPages/src/content/header/header.md";
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
