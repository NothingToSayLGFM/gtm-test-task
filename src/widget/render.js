export function renderWidget(id) {
  const root = document.createElement("div");
  root.id = `bubbi-widget-${id}`;

  root.style.all = "initial";
  root.style.position = "relative";
  root.style.zIndex = "999999";

  root.innerHTML = `
    <div style="
      font-family: Arial, sans-serif;
      border: 1px solid #e5e5e5;
      border-radius: 8px;
      padding: 12px 16px;
      background: #ffffff;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      max-width: 320px;
    ">
      <strong style="display:block; margin-bottom:4px;">
        Social proof
      </strong>
      <span style="font-size:14px; color:#444;">
        12 people bought this today
      </span>
    </div>
  `;

  return root;
}
