/* empty css                                   */
import { c as createComponent, r as renderTemplate, a as addAttribute, d as renderComponent, h as renderHead, i as renderSlot, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_B3QzBHf3.mjs';
import 'kleur/colors';
import { $ as $$ViewTransitions } from '../chunks/ViewTransitions_MNBlST2d.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$LayoutLogin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutLogin;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/logo.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-[#f8f8fb] font-sans"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Jose/Documents/diedpages/DiedPages/src/layouts/LayoutLogin.astro", void 0);

const $$Login1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<body class="bg-gray-100 flex items-center justify-center h-screen"> <div class="bg-white bg-opacity-30 p-6 md:p-8 lg:p-10 rounded-lg shadow-lg w-full max-w-xs"> <h2 class="text-2xl font-bold mb-4 text-center text-white">Iniciar Sesión</h2> <form action="/home" method="POST"> <div class="mb-4"> <label for="password" class="block text-white font-bold mb-2">Contraseña</label> <input type="password" id="password" name="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-white placeholder-white bg-transparent leading-tight focus:outline-none focus:ring focus:border-blue-300" placeholder="Ingrese su contraseña"> </div> <div class="flex items-center justify-center"> <button type="submit" class="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
Ingresar
</button> </div> </form> </div> </body>`;
}, "C:/Users/Jose/Documents/diedpages/DiedPages/src/components/Login1.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutLogin", $$LayoutLogin, { "title": "Login", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative flex min-h-screen flex-col overflow-x-hidden" data-astro-cid-j7pv25f6> <!-- Imagen de fondo con opacidad negra --> <div class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style="background-image: url('/imgLogin/paisajeDead.jpg');" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-black opacity-50" data-astro-cid-j7pv25f6></div> <!-- Capa negra con opacidad --> </div> <div class="relative flex flex-1 justify-center py-5 px-4 md:px-40 z-20" data-astro-cid-j7pv25f6> <div class="flex items-center justify-center min-h-screen" data-astro-cid-j7pv25f6> <div class="flex flex-col max-w-[960px] flex-1" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Login1", $$Login1, { "data-astro-cid-j7pv25f6": true })} </div> </div> </div> </main> ` })} `;
}, "C:/Users/Jose/Documents/diedpages/DiedPages/src/pages/index.astro", void 0);

const $$file = "C:/Users/Jose/Documents/diedpages/DiedPages/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
