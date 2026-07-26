export default function (eleventyConfig) {
  // Le CSS du framework est copié tel quel : le site est stylé par Chantilly.
  eleventyConfig.addPassthroughCopy({ "site/assets": "assets" });
  eleventyConfig.addWatchTarget("src/");

  return {
    dir: {
      input: "site",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
}
