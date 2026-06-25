/**
 * Central registry for all imagery used on the site.
 * Swap a path here and the change ripples through every section.
 *
 * Local files live in /public — referenced with a leading "/".
 */

export const images = {
  hero: {
    fallback: "/showroom-space.png", // used while no hero-video.mp4 is uploaded
  },
  showroom: {
    space: "/showroom-space.png",
    table: "/showroom-table.png",
    detail: "/showroom-detail.png",
  },
  categories: {
    faucets: "/faucets.jpeg",
    tiles: "/tiles.jpeg",
    lighting: "/lighting.jpeg",
  },
  projects: {
    lavasan: "/project-lavasan.jpeg",
    kashan: "/project-kashan.jpeg",
    zafaraniyeh: "/project-zafaraniyeh.jpeg",
    niavaran: "/project-niavaran.jpeg",
  },
  experience: "/showroom-detail.png", // fallback — original interactive-section was deleted
};
