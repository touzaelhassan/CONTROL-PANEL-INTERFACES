(function () {
  const closeBanners = document.querySelectorAll('.banner__close');
  closeBanners.forEach(function (closeBanner) {
    closeBanner.addEventListener('click', function (event) {
      const banner = event.target.parentNode;
      banner.classList.add('banner-collapse');

      banner.addEventListener('transitionend', function (event) {
        if (event.target === this) {
          this.remove();
        }
      });
    });
  });
})();
