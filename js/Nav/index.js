!(function() {
  let html = document.documentElement;
  let welcome = document.getElementById("welcome");
  let latestKnownScroll = 0;
  let ticking = false;

  function onScroll() {
    latestKnownScroll = window.scrollY;
    requestTick();
  }

  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(update);
    }
    ticking = true;
  }

  function update() {
    ticking = false;

    if (latestKnownScroll >= 10) {
      html.classList.add('nav-scrolled');
    } else {
      html.classList.remove('nav-scrolled');
    }
  }

  if (!welcome) {
    html.classList.add("nav-scrolled");
  } else {
    window.addEventListener('scroll', onScroll, false);
  }

})();
