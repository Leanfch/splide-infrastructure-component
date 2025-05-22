var splide = new Splide(".splide-infrastructure", {
  perPage: 3,
  arrows: false,
  breakpoints: {
    800: {
      perPage: 2,
    },
    480: {
      perPage: 1,
    },
  },
});

splide.mount();
