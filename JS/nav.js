  
  // Evitar que los contenidos se solapen cuando la barra de navegación se encuentra fija.
  var shiftWindow = function() { scrollBy(0, -100) };
  window.addEventListener("hashchange", shiftWindow);
  function load() { if (window.location.hash) shiftWindow(); }

  
  // Comportamientos para el menú de navegación.
  let mainNav=document.getElementById('main-nav');
  let navbarToggle=document.getElementById('navbar-toggle');
  navbarToggle.addEventListener('click',function() {

  if (this.classList.contains('active')){
      mainNav.style.display="none";
      this.classList.remove('active');
  }
  else {
      mainNav.style.display="flex";
      this.classList.add('active');
  }
  });