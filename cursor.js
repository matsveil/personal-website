const cursor = document.querySelector('.cursor');
const cursorPos = document.createElement('div');
cursorPos.style.position = 'fixed';
cursorPos.style.top = '-100px';
cursorPos.style.left = '-100px';
document.body.appendChild(cursorPos);

const showCursor = () => {
  cursor.style.display = 'block';
};

const moveCursor = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  const target = e.target;

  // Check if the mouse is hovering over a link element
  if (target.tagName === 'A') {
    cursor.classList.add('hollow');
  } else {
    cursor.classList.remove('hollow');
  }

  cursorPos.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};

const updateCursor = () => {
  const transformValue = cursorPos.style.transform;
  cursor.style.transform = transformValue;
  requestAnimationFrame(updateCursor);
};

window.addEventListener('mousemove', showCursor);
window.addEventListener('mousemove', moveCursor);
requestAnimationFrame(updateCursor);
