import { c as createComponent, r as renderTemplate, a as addAttribute, e as renderHead, b as createAstro } from './astro/server_DA1aD2N3.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$OpenImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OpenImage;
  const { image } = Astro2.props;
  const { description, src } = image;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>Gallery</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css">', '</head> <body> <a data-fancybox="gallery"', "", '> <div class="flex flex-col gap-3"> <div class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl cursor-pointer"', `></div> </div> </a> <script type="module">
    import { Fancybox } from "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.esm.js";

    Fancybox.bind('[data-fancybox="gallery"]', {
      //
    });
  <\/script> </body></html>`])), renderHead(), addAttribute(src, "data-src"), addAttribute(description, "data-caption"), addAttribute(`background-image: url(${src});`, "style"));
}, "C:/Users/Jose/Documents/diedpages/DiedPages/src/components/OpenImage.astro", void 0);

export { $$OpenImage as $ };
