window.addEventListener('scroll', function() {
    var header = document.getElementById('#teste');
    console.log('Scroll event detected');
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });