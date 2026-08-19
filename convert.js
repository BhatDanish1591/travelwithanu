const fs = require('fs');

const htmlPath = 'legacy/index.html';
const html = fs.readFileSync(htmlPath, 'utf8');

// Extract the content inside body, excluding <header> and <footer id="footer">
let bodyContent = html.match(/<body>([\s\S]*?)<\/body>/)[1];

// Remove header
bodyContent = bodyContent.replace(/<header>[\s\S]*?<\/header>/, '');
// Remove footer
bodyContent = bodyContent.replace(/<footer id="footer"[\s\S]*?<\/footer>/, '');

// Fix some specific things like <script src="app.js"></script> which are not needed
bodyContent = bodyContent.replace(/<script[\s\S]*?<\/script>/g, '');
bodyContent = bodyContent.replace(/<button id="back-to-top"[\s\S]*?<\/button>/, '');
bodyContent = bodyContent.replace(/<div class="toast"[\s\S]*?<\/div>/, '');

// Convert class to className
bodyContent = bodyContent.replace(/ class="/g, ' className="');
// Convert for to htmlFor
bodyContent = bodyContent.replace(/ for="/g, ' htmlFor="');

// Fix void tags
const voidTags = ['img', 'br', 'hr', 'input', 'link', 'meta'];
voidTags.forEach(tag => {
  const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'g');
  bodyContent = bodyContent.replace(regex, `<${tag}$1 />`);
});

// Fix style strings to objects
bodyContent = bodyContent.replace(/style="([^"]+)"/g, (match, styleString) => {
  const styles = styleString.split(';').filter(s => s.trim() !== '');
  const styleObj = {};
  styles.forEach(s => {
    const [key, value] = s.split(':').map(v => v.trim());
    if (key && value) {
      const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
      styleObj[camelKey] = value;
    }
  });
  return `style={{ ${Object.entries(styleObj).map(([k, v]) => `${k}: '${v}'`).join(', ')} }}`;
});

// React specific fixes
bodyContent = bodyContent.replace(/<!--[\s\S]*?-->/g, (match) => {
  return `{/* ${match.replace(/<!--|-->/g, '').trim()} */}`;
});

bodyContent = bodyContent.replace(/fetchpriority/g, 'fetchPriority');
bodyContent = bodyContent.replace(/autocomplete/g, 'autoComplete');
bodyContent = bodyContent.replace(/itemscope/g, 'itemScope');
bodyContent = bodyContent.replace(/itemtype/g, 'itemType');
bodyContent = bodyContent.replace(/itemprop/g, 'itemProp');
bodyContent = bodyContent.replace(/xmlns:xlink/g, 'xmlnsXlink');

// Change standard hrefs to Link
bodyContent = bodyContent.replace(/<a([^>]*)href="([^"]+)"([^>]*)>/g, (match, before, href, after) => {
  if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('#')) {
    return `<a${before}href="${href}"${after}>`;
  } else {
    const to = '/' + href.replace('.html', '');
    return `<Link${before}to="${to === '/index' ? '/' : to}"${after}>`;
  }
});
bodyContent = bodyContent.replace(/<\/a>/g, (match, offset, string) => {
  // Try to find if this closing tag is for a <Link>
  // This is a bit tricky with regex, let's keep it simple. If we use Link, we need to replace </a> with </Link>.
  // But wait, it's safer to just import Link from react-router-dom and change it explicitly where matched.
  // Actually, replacing all </a> with </Link> if the opening tag was <Link> is hard with regex. Let's refine the href replace.
  return match;
});

// Refining the <a ...> to <Link ...> conversion
let finalHtml = bodyContent;
finalHtml = finalHtml.replace(/<a ([^>]*)href="([^"]+)"([^>]*)>([\s\S]*?)<\/a>/g, (match, before, href, after, inner) => {
  if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('#')) {
    return match; // keep as <a>
  } else {
    const to = '/' + href.replace('.html', '');
    return `<Link ${before}to="${to === '/index' ? '/' : to}"${after}>${inner}</Link>`;
  }
});

// Convert remaining <img> tags with attributes
// Not needed if void tags are fixed.

const output = `import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      ${finalHtml.trim()}
    </>
  );
};

export default Home;
`;

fs.writeFileSync('client/src/pages/Home.jsx', output);
console.log('Successfully written to client/src/pages/Home.jsx');
