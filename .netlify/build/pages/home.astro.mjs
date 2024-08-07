/* empty css                                   */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent } from '../chunks/astro/server_B3QzBHf3.mjs';
import 'kleur/colors';
import { a as getEntry, b as bimages, c as bvideos, $ as $$Layout } from '../chunks/Layout_DI63-hN7.mjs';
import 'clsx';
import { $ as $$OpenImage } from '../chunks/OpenImage_BYcKgC0T.mjs';
import { $ as $$OpenVideo } from '../chunks/OpenVideo_By2-wV5p.mjs';
export { renderers } from '../renderers.mjs';

const $$Biography = createComponent(async ($$result, $$props, $$slots) => {
  const biographia = await getEntry("biography", "biography");
  const { img, name, birthyear, deathyear, biography } = biographia.data;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center items-center mx-auto relative profile-container"> <div class="rounded-full overflow-hidden w-32 h-32 md:w-48 md:h-48"> <div class="w-full h-full bg-center bg-no-repeat bg-cover"${addAttribute(img, "style")}></div> </div> <img src="/biography/luto.png" alt="Ribbon" class="absolute -bottom-4 -right-4 w-12"> </div> <h1 class="text-[#0e0e1b] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] text-center pb-3 pt-5"> ${name} &#128330;
</h1> <p class="text-[#505095] text-sm font-normal leading-normal text-center pb-3 pt-1"> ${birthyear} - ${deathyear} </p> <h2 class="text-[#0e0e1b] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
Biografía
</h2> <p class="text-[#0e0e1b] text-base font-normal leading-normal pb-3 pt-1"> ${biography} </p>`;
}, "C:/Users/Jose/Documents/diedpages/DiedPages/src/components/Biography.astro", void 0);

const $$GallerySection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h2 class="text-[#0e0e1b] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
Galería de Fotos
</h2> <div class="grid grid-cols-2 md:grid-cols-4 gap-3 p-4"> ${bimages.map((bimage) => renderTemplate`${renderComponent($$result, "OpenImage", $$OpenImage, { "image": bimage })}`)} </div>`;
}, "C:/Users/Jose/Documents/diedpages/DiedPages/src/components/GallerySection.astro", void 0);

const $$Spotify = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h2 class="text-[#0e0e1b] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
Spotify Playlist
</h2> <div class="flex justify-center items-center p-4"> <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> </div>`;
}, "C:/Users/Jose/Documents/diedpages/DiedPages/src/components/Spotify.astro", void 0);

const $$VideoGallerySection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h2 class="text-[#0e0e1b] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Galería de Videos</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-3 p-4"> ${bvideos.map((bvideo) => renderTemplate`${renderComponent($$result, "OpenVideo", $$OpenVideo, { "video": bvideo })}`)} </div>`;
}, "C:/Users/Jose/Documents/diedpages/DiedPages/src/components/VideoGallerySection.astro", void 0);

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "[Nombre Difunto]" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative flex min-h-screen flex-col overflow-x-hidden"> <div class="flex flex-1 justify-center py-5 px-4 md:px-40"> <div class="flex flex-col max-w-[960px] flex-1"> ${renderComponent($$result2, "Biography", $$Biography, {})} ${renderComponent($$result2, "GallerySection", $$GallerySection, {})} ${renderComponent($$result2, "Spotify", $$Spotify, {})} ${renderComponent($$result2, "VideoGallerySection", $$VideoGallerySection, {})} </div> </div> </main> ` })}`;
}, "C:/Users/Jose/Documents/diedpages/DiedPages/src/pages/home.astro", void 0);

const $$file = "C:/Users/Jose/Documents/diedpages/DiedPages/src/pages/home.astro";
const $$url = "/home";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Home,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
