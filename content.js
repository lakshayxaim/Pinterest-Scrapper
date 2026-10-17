// Create a floating UI panel on the screen
const panel = document.createElement('div');
panel.style.position = 'fixed';
panel.style.bottom = '20px';
panel.style.right = '20px';
panel.style.width = '320px';
panel.style.maxHeight = '400px';
panel.style.overflowY = 'auto';
panel.style.backgroundColor = '#ffffff';
panel.style.boxShadow = '0px 4px 15px rgba(0,0,0,0.2)';
panel.style.borderRadius = '12px';
panel.style.padding = '15px';
panel.style.zIndex = '999999';
panel.style.fontFamily = 'Arial, sans-serif';
panel.innerHTML = `
  <div style="font-weight:bold; color:#bd081c; margin-bottom:10px; display:flex; justify-content:space-between;">
    <span>📌 Captured Video Links</span>
    <span id="pin-count" style="background:#bd081c; color:white; padding:2px 6px; border-radius:10px; font-size:12px;">0</span>
  </div>
  <textarea id="pin-links-text" style="width:100%; height:250px; font-size:11px; border:1px solid #ddd; border-radius:6px; padding:5px; resize:none;" readonly placeholder="Scroll down to gather links..."></textarea>
  <button id="copy-pin-btn" style="width:100%; margin-top:8px; background:#bd081c; color:white; border:none; padding:8px; border-radius:6px; cursor:pointer; font-weight:bold;">Copy All Links</button>
`;
document.body.appendChild(panel);

const textarea = panel.querySelector('#pin-links-text');
const countBadge = panel.querySelector('#pin-count');
const copyBtn = panel.querySelector('#copy-pin-btn');

const capturedUrls = new Set();

// Function to find links
function grabLinks() {
  const elements = document.querySelectorAll('a[href*="/pin/"]');
  let updated = false;

  elements.forEach(el => {
    let href = el.getAttribute('href');
    if (href) {
      if (href.startsWith('/')) {
        href = 'https://www.pinterest.com' + href;
      }

      // Filter out standard non-pin utility links
      if (!href.includes(window.location.pathname) && !capturedUrls.has(href)) {
        capturedUrls.add(href);
        updated = true;
      }
    }
  });

  if (updated) {
    const urlArray = Array.from(capturedUrls);
    textarea.value = urlArray.join('\n');
    countBadge.innerText = urlArray.length;
  }
}

// Copy button functionality
copyBtn.addEventListener('click', () => {
  textarea.select();
  navigator.clipboard.writeText(textarea.value);
  copyBtn.innerText = "✓ Copied!";
  copyBtn.style.backgroundColor = "#27ae60";
  setTimeout(() => {
    copyBtn.innerText = "Copy All Links";
    copyBtn.style.backgroundColor = "#bd081c";
  }, 2000);
});

// Watch the page as you scroll or load
window.addEventListener('load', () => {
  setTimeout(grabLinks, 2000);

  // Scrapes every time you scroll down to see new videos
  window.addEventListener('scroll', () => {
    grabLinks();
  });
});