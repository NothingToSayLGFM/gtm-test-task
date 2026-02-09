import { renderWidget } from "../widget/render";

const TARGET_SELECTORS = [".price", ".promo-price"];

function findMountPoints() {
  const points = new Set();

  for (const selector of TARGET_SELECTORS) {
    document.querySelectorAll(selector).forEach((el) => {
      if (el.parentElement) {
        points.add(el.parentElement);
      }
    });
  }

  return points.size ? [...points] : [document.body];
}

export function mountWidget() {
  const mountPoints = findMountPoints();

  mountPoints.forEach((mountPoint, index) => {
    if (mountPoint.dataset.bubbiMounted) return;
    console.warn(index);
    const widget = renderWidget(index);
    mountPoint.dataset.bubbiMounted = "true";
    if (document.getElementById(widget.id)) return;

    mountPoint.insertAdjacentElement("afterend", widget);
  });
}
