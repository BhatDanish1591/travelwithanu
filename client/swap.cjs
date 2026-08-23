const fs = require('fs');
const file = 'src/pages/Home.jsx';
let content = fs.readFileSync(file, 'utf8');

const destMarker = '{/* ============================================================\n     POPULAR DESTINATIONS\n     ============================================================ */}';
const packMarker = '{/* ============================================================\n     TOUR PACKAGES\n     ============================================================ */}';
const expMarker = '{/* ============================================================\n     EXPERIENCES\n     ============================================================ */}';

const destStart = content.indexOf(destMarker);
const packStart = content.indexOf(packMarker);
const expStart = content.indexOf(expMarker);

if (destStart > -1 && packStart > -1 && expStart > -1) {
  const destSection = content.slice(destStart, packStart);
  const packSection = content.slice(packStart, expStart);
  
  const before = content.slice(0, destStart);
  const after = content.slice(expStart);
  
  // Swap packSection and destSection
  let newPackSection = packSection.replace('className="section-py bg-alt"', `className="section-py" style={{ paddingTop: '80px' }}`);
  let newDestSection = destSection.replace(`className="section-py" style={{ paddingTop: '80px' }}`, 'className="section-py bg-alt"');
  
  const newContent = before + newPackSection + newDestSection + after;
  fs.writeFileSync(file, newContent, 'utf8');
  console.log('Successfully swapped sections.');
} else {
  console.log('Could not find markers', destStart, packStart, expStart);
}
