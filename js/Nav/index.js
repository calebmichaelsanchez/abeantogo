!(function() {
  let html = document.documentElement;
  let welcome = document.getElementById("welcome");
  let toggle = document.querySelectorAll(".nav__toggle")[0];
  let bar = document.querySelectorAll(".sqs-announcement-bar");
  let latestKnownScroll = 0;
  let ticking = false;

  function onClick(event) {
    event.preventDefault();
    html.classList.toggle("nav-active");
  }

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
  html.classList.add("nav-scrolled");
  // if (!welcome) {
  //   html.classList.add("nav-scrolled");
  // } else {
  //   window.addEventListener('scroll', onScroll, false);
  // }

  toggle.addEventListener("click", onClick, false);

})();
