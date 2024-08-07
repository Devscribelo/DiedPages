import { c as createComponent, r as renderTemplate, a as addAttribute, m as maybeRenderHead, b as createAstro } from './astro/server_B3QzBHf3.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$OpenVideo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OpenVideo;
  const { video } = Astro2.props;
  const { href, img } = video;
  return renderTemplate(_a || (_a = __template(["", "<div> <p> <a", ' data-fancybox="video-gallery"><img class="w-full aspect-video rounded-xl" alt=""', '></a> </p> </div> <script type="module">\n  import { Fancybox } from "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.esm.js";\n\n  // Opciones personalizadas\n  const options = {\n    // Agrega aqu\xED tus opciones personalizadas\n  };\n\n  // Inicializa Fancybox\n  Fancybox.bind("[data-fancybox]", options);\n<\/script>'])), maybeRenderHead(), addAttribute(href, "href"), addAttribute(img, "src"));
}, "C:/Users/Jose/Documents/diedpages/DiedPages/src/components/OpenVideo.astro", void 0);

export { $$OpenVideo as $ };
