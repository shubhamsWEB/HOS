const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

const unsplashLink = (id, width, height) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
  {
    id: "ts1zXzsD7xc",
    width: 100,
    height: 620,
    src:'/assets/ring1.jpg'
  },
  {
    id: "F_r83HEzsXI",
    width: 300,
    height: 426,
    src:'/assets/ring2.png'
  },
  {
    id: "m82uh_vamhg",
    width: 300,
    height: 440,
    src:'/assets/ring4.png'
  },
];

export const slides = unsplashPhotos.map((photo) => {
  const width = photo.width * 4;
  const height = photo.height * 4;
  return {
    src: photo.src,
    width,
    height,
    // srcSet: breakpoints.map((breakpoint) => {
    //   return {
    //     src: photo.src,
    //     width: width,
    //     height: height,
    //   };
    // }),
  };
});

export const advancedSlides = [
  { ...slides[0], title: "Puppy in sunglasses", description: "Mollie Sivaram" },
  {
    ...slides[1],
    title: "Miami Beach",
    description:
      "Clark Van Der Beken\n\nSouth Beach, Miami Beach, Florida, United States",
  },
  {
    ...slides[2],
    title: "Flamingo",
    description: "Vicko Mozara\n\nVeliki zali, Dubravica, Croatia",
  },
];

export default slides;
