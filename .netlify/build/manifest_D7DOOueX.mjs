import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_DA1aD2N3.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Jose/Documents/diedpages/DiedPages/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/galeria.z4KHbuHP.css"}],"routeData":{"route":"/galeria","isIndex":false,"type":"page","pattern":"^\\/galeria\\/?$","segments":[[{"content":"galeria","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/galeria.astro","pathname":"/galeria","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/galeria.z4KHbuHP.css"}],"routeData":{"route":"/videos","isIndex":false,"type":"page","pattern":"^\\/videos\\/?$","segments":[[{"content":"videos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/videos.astro","pathname":"/videos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/galeria.z4KHbuHP.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Jose/Documents/diedpages/DiedPages/src/pages/galeria.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Jose/Documents/diedpages/DiedPages/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Jose/Documents/diedpages/DiedPages/src/pages/videos.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/Jose/Documents/diedpages/DiedPages/src/components/Biography.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Jose/Documents/diedpages/DiedPages/src/components/Header.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Jose/Documents/diedpages/DiedPages/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/galeria@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/videos@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/galeria@_@astro":"pages/galeria.astro.mjs","\u0000@astro-page:src/pages/videos@_@astro":"pages/videos.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_D7DOOueX.mjs","C:/Users/Jose/Documents/diedpages/DiedPages/src/content/CardVideo/cardvideo.md?astroContentCollectionEntry=true":"chunks/cardvideo_CgVFfYqs.mjs","C:/Users/Jose/Documents/diedpages/DiedPages/src/content/VideoGallerySection/videogallerysection.md?astroContentCollectionEntry=true":"chunks/videogallerysection_D4ortAh4.mjs","C:/Users/Jose/Documents/diedpages/DiedPages/src/content/biography/biography.md?astroContentCollectionEntry=true":"chunks/biography_CNLVzL5U.mjs","C:/Users/Jose/Documents/diedpages/DiedPages/src/content/gallerysection/gallerysection.md?astroContentCollectionEntry=true":"chunks/gallerysection_B67e84lH.mjs","C:/Users/Jose/Documents/diedpages/DiedPages/src/content/header/header.md?astroContentCollectionEntry=true":"chunks/header_oPXpEe8L.mjs","C:/Users/Jose/Documents/diedpages/DiedPages/src/content/CardVideo/cardvideo.md?astroPropagatedAssets":"chunks/cardvideo_Jjl7WfnP.mjs","C:/Users/Jose/Documents/diedpages/DiedPages/src/content/VideoGallerySection/videogallerysection.md?astroPropagatedAssets":"chunks/videogallerysection_B0CyG5rx.mjs","C:/Users/Jose/Documents/diedpages/DiedPages/src/content/biography/biography.md?astroPropagatedAssets":"chunks/biography_D-QaeQaz.mjs","C:/Users/Jose/Documents/diedpages/DiedPages/src/content/gallerysection/gallerysection.md?astroPropagatedAssets":"chunks/gallerysection_BannEp0s.mjs","C:/Users/Jose/Documents/diedpages/DiedPages/src/content/header/header.md?astroPropagatedAssets":"chunks/header_0hn1B30D.mjs","C:/Users/Jose/Documents/diedpages/DiedPages/src/content/CardVideo/cardvideo.md":"chunks/cardvideo_BOadrPEs.mjs","C:/Users/Jose/Documents/diedpages/DiedPages/src/content/VideoGallerySection/videogallerysection.md":"chunks/videogallerysection_CowpswJ4.mjs","C:/Users/Jose/Documents/diedpages/DiedPages/src/content/biography/biography.md":"chunks/biography_CYeX_FNX.mjs","C:/Users/Jose/Documents/diedpages/DiedPages/src/content/gallerysection/gallerysection.md":"chunks/gallerysection_BfHMIK-7.mjs","C:/Users/Jose/Documents/diedpages/DiedPages/src/content/header/header.md":"chunks/header_Cn8Ztkb1.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/galeria.z4KHbuHP.css","/logo.png","/biography/1.jpeg","/biography/2.jpeg","/biography/3.jpeg","/biography/4.jpeg","/biography/5.jpeg","/biography/6.jpeg","/biography/7.jpeg","/biography/8.jpeg","/biography/difunto.jpeg","/biography/dove.png","/biography/luto.png","/gallery/1.jpg","/gallery/10.jpg","/gallery/11.jpg","/gallery/12.jpg","/gallery/13.jpg","/gallery/14.jpg","/gallery/15.jpg","/gallery/16.jpg","/gallery/17.jpg","/gallery/18.jpg","/gallery/19.jpg","/gallery/2.jpg","/gallery/20.jpg","/gallery/3.jpg","/gallery/4.jpg","/gallery/5.jpg","/gallery/6.jpg","/gallery/7.jpg","/gallery/8.jpg","/gallery/9.jpg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { manifest };
