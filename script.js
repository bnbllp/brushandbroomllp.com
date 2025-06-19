const colors = ['#ff7a24', '#28c76f', '#2499ff', '#e91e63', '#9c27b0', '#3f51b5', '#ff5722', '#ffc107', '#00bcd4', '#4caf50', '#607d8b', '#f44336'];
const buttons = document.querySelectorAll('.service-grid a');

function randomizeColors() {
  buttons.forEach(btn => {
    const rand = colors[Math.floor(Math.random() * colors.length)];
    btn.style.backgroundColor = rand;
    btn.style.boxShadow = `0 3px 10px ${rand}80`;
  });
}
randomizeColors();
setInterval(randomizeColors, 3000);

function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  const overlay = document.getElementById("menuOverlay");
  menu.classList.toggle("open");
  overlay.style.display = menu.classList.contains("open") ? "block" : "none";
}

// Close menu when a link is clicked
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#sideMenu a').forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
});
