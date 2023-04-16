const cursor = document.querySelector('.cursor');

const showCursor = () => {
  cursor.style.display = 'block';
}

const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`; 
}

window.addEventListener('mousemove', showCursor);
window.addEventListener('mousemove', moveCursor);



  
