import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'normalize.css/normalize.css';
import '../sass/style.scss';

const sidebarToggler1 = document.querySelector('.sidebar-toggler-1');
const sidebarToggler2 = document.querySelector('.sidebar-toggler-2');
const sidebarComponent = document.querySelector('.sidebar-component');

sidebarToggler1.addEventListener('click', function () {
  sidebarComponent.classList.toggle('active');
  this.style.display = 'none';
});

sidebarToggler2.addEventListener('click', function () {
  sidebarComponent.classList.toggle('active');
  sidebarToggler1.style.display = 'block';
});
