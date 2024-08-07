/* empty css                                   */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent } from '../chunks/astro/server_B3QzBHf3.mjs';
import 'kleur/colors';
import { g as gimages, $ as $$Layout } from '../chunks/Layout_DI63-hN7.mjs';
import { $ as $$OpenImage } from '../chunks/OpenImage_BYcKgC0T.mjs';
export { renderers } from '../renderers.mjs';

const $$CardGallery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h2 class="text-[#0e0e1b] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
Galería</h2> <div class="w-full bg-center bg-no-repeat bg-cover rounded-xl aspect-[4/2]"${addAttribute(`background-image: url('/gallery/1.jpg');`, "style")}></div> <div class="grid grid-cols-2 md:grid-cols-3 gap-3 p-4"> ${gimages.map((gimage) => renderTemplate`${renderComponent($$result, "OpenImage", $$OpenImage, { "image": gimage })}`)} </div>`;
}, "C:/Users/Jose/Documents/diedpages/DiedPages/src/components/CardGallery.astro", void 0);

const $$Galeria = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Galer\xEDa" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative flex min-h-screen flex-col overflow-x-hidden"> <div class="flex flex-1 justify-center py-5 px-4 md:px-40"> <div class="flex flex-col max-w-[960px] flex-1"> ${renderComponent($$result2, "CardGallery", $$CardGallery, {})} </div> </div> </main> ` })}`;
}, "C:/Users/Jose/Documents/diedpages/DiedPages/src/pages/galeria.astro", void 0);

const $$file = "C:/Users/Jose/Documents/diedpages/DiedPages/src/pages/galeria.astro";
const $$url = "/galeria";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Galeria,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
