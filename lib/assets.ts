const gh = "https://cdn.jsdelivr.net/gh/k-rudee/dentalofficelithonia@main/public";

export const images = {
  logo: {
    src: `${gh}/images/logo.jpg`,
    alt: "The Dental Office of Lithonia — Dr. Michael Chen",
    width: 2560,
    height: 821,
  },
  drChen: {
    src: `${gh}/images/dr-chen.jpg`,
    alt: "Dr. Michael Chen, DMD, in a white coat",
    width: 1290,
    height: 1808,
  },
  teamSign: {
    src: `${gh}/images/team-sign.jpg`,
    alt: "Dr. Michael Chen and the Dental Office of Lithonia team standing in front of the practice sign",
    width: 1290,
    height: 1247,
  },
  building: {
    src: `${gh}/images/building.webp`,
    alt: "Brick office building of The Dental Office of Lithonia on Covington Highway",
    width: 704,
    height: 263,
  },
  chairside: {
    src: `${gh}/images/chairside.webp`,
    alt: "Dr. Michael Chen explaining a dental model to a patient in the treatment chair",
    width: 765,
    height: 1020,
  },
} as const;
