const nav = document.querySelector('nav.menu');
const toggleBtn = document.getElementById('toggle');

toggleBtn.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggleBtn.textContent = isOpen ? '×' : '☰';
});