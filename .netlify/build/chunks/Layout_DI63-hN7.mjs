import { c as createComponent, e as renderUniqueStylesheet, f as renderScriptElement, g as createHeadAndContent, r as renderTemplate, d as renderComponent, u as unescapeHTML, m as maybeRenderHead, a as addAttribute, h as renderHead, i as renderSlot, b as createAstro } from './astro/server_B3QzBHf3.mjs';
import 'kleur/colors';
import { $ as $$ViewTransitions } from './ViewTransitions_MNBlST2d.mjs';
import 'clsx';
import { A as AstroError, U as UnknownContentCollectionError } from './astro/assets-service_Da-IJyx9.mjs';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
/* empty css                           */

const bimages = [
  {
    description: "",
    src: "/biography/1.jpeg"
  },
  {
    description: "",
    src: "/biography/2.jpeg"
  },
  {
    description: "",
    src: "/biography/3.jpeg"
  },
  {
    description: "",
    src: "/biography/4.jpeg"
  }
];
const gimages = [
  {
    description: "",
    src: "/gallery/1.jpg"
  },
  {
    description: "",
    src: "/gallery/2.jpg"
  },
  {
    description: "",
    src: "/gallery/3.jpg"
  },
  {
    description: "",
    src: "/gallery/4.jpg"
  },
  {
    description: "",
    src: "/gallery/5.jpg"
  },
  {
    description: "",
    src: "/gallery/6.jpg"
  },
  {
    description: "",
    src: "/gallery/7.jpg"
  },
  {
    description: "",
    src: "/gallery/8.jpg"
  },
  {
    description: "",
    src: "/gallery/9.jpg"
  },
  {
    description: "",
    src: "/gallery/10.jpg"
  },
  {
    description: "",
    src: "/gallery/11.jpg"
  },
  {
    description: "",
    src: "/gallery/12.jpg"
  },
  {
    description: "",
    src: "/gallery/13.jpg"
  },
  {
    description: "",
    src: "/gallery/14.jpg"
  },
  {
    description: "",
    src: "/gallery/15.jpg"
  },
  {
    description: "",
    src: "/gallery/16.jpg"
  },
  {
    description: "",
    src: "/gallery/17.jpg"
  },
  {
    description: "",
    src: "/gallery/18.jpg"
  },
  {
    description: "",
    src: "/gallery/19.jpg"
  },
  {
    description: "",
    src: "/gallery/20.jpg"
  }
];
const bvideos = [
  {
    href: "https://www.youtube.com/watch?v=R0d56K_xOLM",
    img: "https://img.youtube.com/vi/R0d56K_xOLM/maxresdefault.jpg"
  },
  {
    href: "https://www.youtube.com/watch?v=R0d56K_xOLM",
    img: "https://img.youtube.com/vi/R0d56K_xOLM/maxresdefault.jpg"
  }
];
const gvideos = [
  {
    href: "https://www.youtube.com/watch?v=R0d56K_xOLM",
    img: "https://img.youtube.com/vi/R0d56K_xOLM/maxresdefault.jpg"
  },
  {
    href: "https://www.youtube.com/watch?v=R0d56K_xOLM",
    img: "https://img.youtube.com/vi/R0d56K_xOLM/maxresdefault.jpg"
  },
  {
    href: "https://www.youtube.com/watch?v=R0d56K_xOLM",
    img: "https://img.youtube.com/vi/R0d56K_xOLM/maxresdefault.jpg"
  },
  {
    href: "https://www.youtube.com/watch?v=R0d56K_xOLM",
    img: "https://img.youtube.com/vi/R0d56K_xOLM/maxresdefault.jpg"
  },
  {
    href: "https://www.youtube.com/watch?v=R0d56K_xOLM",
    img: "https://img.youtube.com/vi/R0d56K_xOLM/maxresdefault.jpg"
  },
  {
    href: "https://www.youtube.com/watch?v=R0d56K_xOLM",
    img: "https://img.youtube.com/vi/R0d56K_xOLM/maxresdefault.jpg"
  },
  {
    href: "https://www.youtube.com/watch?v=R0d56K_xOLM",
    img: "https://img.youtube.com/vi/R0d56K_xOLM/maxresdefault.jpg"
  },
  {
    href: "https://www.youtube.com/watch?v=R0d56K_xOLM",
    img: "https://img.youtube.com/vi/R0d56K_xOLM/maxresdefault.jpg"
  },
  {
    href: "https://www.youtube.com/watch?v=R0d56K_xOLM",
    img: "https://img.youtube.com/vi/R0d56K_xOLM/maxresdefault.jpg"
  },
  {
    href: "https://www.youtube.com/watch?v=R0d56K_xOLM",
    img: "https://img.youtube.com/vi/R0d56K_xOLM/maxresdefault.jpg"
  }
];

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/biography/biography.md": () => import('./biography_CNLVzL5U.mjs'),"/src/content/header/header.md": () => import('./header_CWfO2MXq.mjs')});
createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"biography":{"type":"content","entries":{"biography":"/src/content/biography/biography.md"}},"header":{"type":"content","entries":{"header":"/src/content/header/header.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/biography/biography.md": () => import('./biography_DTsOXAjR.mjs'),"/src/content/header/header.md": () => import('./header_3sI1qQWQ.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const header = await getEntry("header", "header");
  const {
    logo,
    name,
    link1,
    namelink1,
    link2,
    namelink2,
    link3,
    namelink3,
    link4,
    namelink4
  } = header.data;
  return renderTemplate`${maybeRenderHead()}<header id="header" class="flex items-center justify-between border-b border-solid border-[#e8e8f3] px-4 py-3 md:px-10 sticky top-0 z-50 bg-white shadow-md" data-astro-cid-3ef6ksr2> <a href="/" class="flex items-center gap-4 text-[#0e0e1b]" data-astro-cid-3ef6ksr2> <div class="w-10 h-10" data-astro-cid-3ef6ksr2> <img${addAttribute(logo, "src")} alt="Logo" data-astro-cid-3ef6ksr2> </div> <h2 class="text-lg font-bold leading-tight tracking-[-0.015em]" data-astro-cid-3ef6ksr2>${name}</h2> </a> <!-- Menu Toggle for Mobile --> <input type="checkbox" id="menu-toggle" class="hidden" data-astro-cid-3ef6ksr2> <label for="menu-toggle" class="block md:hidden text-[#0e0e1b] cursor-pointer relative pl-4 pr-4" data-astro-cid-3ef6ksr2> <svg id="menu-icon" class="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3ef6ksr2> <path id="icon-bar1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16" data-astro-cid-3ef6ksr2></path> <path id="icon-bar2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16" data-astro-cid-3ef6ksr2></path> <path id="icon-bar3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 18h16" data-astro-cid-3ef6ksr2></path> <path id="icon-close" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-3ef6ksr2></path> </svg> </label> <!-- Desktop Menu --> <nav class="hidden md:flex flex-1 justify-end gap-4 md:gap-8" data-astro-cid-3ef6ksr2> <a class="text-sm font-medium leading-normal text-[#0e0e1b]"${addAttribute(link1, "href")} data-astro-cid-3ef6ksr2>${namelink1}</a> <a class="text-sm font-medium leading-normal text-[#0e0e1b]"${addAttribute(link2, "href")} data-astro-cid-3ef6ksr2>${namelink2}</a> <a class="text-sm font-medium leading-normal text-[#0e0e1b]"${addAttribute(link3, "href")} data-astro-cid-3ef6ksr2>${namelink3}</a> <a class="text-sm font-medium leading-normal text-[#0e0e1b]"${addAttribute(link4, "href")} data-astro-cid-3ef6ksr2>${namelink4}</a> </nav> <!-- Mobile Menu --> <div class="fixed inset-x-0 top-14 bg-white shadow-lg transition-transform duration-300 transform -translate-y-full z-40 overflow-y-auto p-6" id="mobile-menu" data-astro-cid-3ef6ksr2> <div class="flex flex-col space-y-4 w-full" data-astro-cid-3ef6ksr2> <a class="text-xl text-gray-900 hover:text-blue-600 transition-colors duration-200 border-b border-gray-300 pb-2"${addAttribute(link1, "href")} data-astro-cid-3ef6ksr2>${namelink1}</a> <a class="text-xl text-gray-900 hover:text-blue-600 transition-colors duration-200 border-b border-gray-300 pb-2"${addAttribute(link2, "href")} data-astro-cid-3ef6ksr2>${namelink2}</a> <a class="text-xl text-gray-900 hover:text-blue-600 transition-colors duration-200 border-b border-gray-300 pb-2"${addAttribute(link3, "href")} data-astro-cid-3ef6ksr2>${namelink3}</a> <a class="text-xl text-gray-900 hover:text-blue-600 transition-colors duration-200 border-b border-gray-300 pb-2"${addAttribute(link4, "href")} data-astro-cid-3ef6ksr2>${namelink4}</a> </div> </div> </header> `;
}, "C:/Users/Jose/Documents/diedpages/DiedPages/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#0e0e1b] text-white py-6 mt-10"> <div class="container mx-auto px-6"> <div class="flex flex-col md:flex-row justify-between items-center"> <div class="flex items-center gap-4 mb-4 md:mb-0"> <img src="/logo.png" alt="Memorialize Logo" class="h-10 w-10"> <h2 class="text-lg font-bold leading-tight tracking-[-0.015em]">
Memorialize
</h2> </div> <nav class="flex flex-wrap justify-center md:justify-end space-x-6 mb-4 md:mb-0"> <a href="#" class="text-sm font-medium leading-normal hover:underline">Contact Us</a> <a href="#" class="text-sm font-medium leading-normal hover:underline">FAQ</a> <a href="#" class="text-sm font-medium leading-normal hover:underline">Support</a> </nav> </div> <div class="flex flex-col md:flex-row justify-between items-center mt-6"> <p class="text-sm font-light text-center md:text-left">
&copy; 2024 Memorialize. All rights reserved.
</p> <nav class="flex flex-wrap justify-center md:justify-end space-x-4 mt-2 md:mt-0"> <a href="#" class="hover:underline">Privacy Policy</a> <a href="#" class="hover:underline">Terms of Service</a> </nav> </div> </div> </footer>`;
}, "C:/Users/Jose/Documents/diedpages/DiedPages/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/logo.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-[#f8f8fb] font-sans"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Jose/Documents/diedpages/DiedPages/src/layouts/Layout.astro", void 0);

export { $$Layout as $, getEntry as a, bimages as b, bvideos as c, gvideos as d, gimages as g };
