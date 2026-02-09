import { mountWidget } from "./dom/mount";

function observeDom() {
  const observer = new MutationObserver(() => {
    mountWidget();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

export function init() {
  if (window.__BUBBI_WIDGET__) return;
  window.__BUBBI_WIDGET__ = true;

  console.warn(`[${__NAME__}] v${__VERSION__} loaded in ${__ENVIRONMENT__}`);

  mountWidget();
  observeDom();
}
