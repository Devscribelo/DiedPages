/* empty css                                   */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_DA1aD2N3.mjs';
import 'kleur/colors';
import { $ as $$OpenVideo } from '../chunks/OpenVideo_D6ISk8UF.mjs';
import { a as gvideos, $ as $$Layout } from '../chunks/Layout_Ct-6ffEH.mjs';
export { renderers } from '../renderers.mjs';

const $$CardVideo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h2 class="text-[#0e0e1b] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Video
    Gallery</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-3 p-4"> ${gvideos.map((gvideo) => renderTemplate`${renderComponent($$result, "OpenVideo", $$OpenVideo, { "video": gvideo })}`)} </div>`;
}, "C:/Users/Jose/Documents/diedpages/DiedPages/src/components/CardVideo.astro", void 0);

const $$Videos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Videos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative flex min-h-screen flex-col overflow-x-hidden"> <div class="flex flex-1 justify-center py-5 px-4 md:px-40"> <div class="flex flex-col max-w-[960px] flex-1"> ${renderComponent($$result2, "CardVideo", $$CardVideo, {})} </div> </div> </main> ` })}`;
}, "C:/Users/Jose/Documents/diedpages/DiedPages/src/pages/videos.astro", void 0);

const $$file = "C:/Users/Jose/Documents/diedpages/DiedPages/src/pages/videos.astro";
const $$url = "/videos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Videos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
