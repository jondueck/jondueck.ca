const pluginRss = require("@11ty/eleventy-plugin-rss");

const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy({
		"_src/css/": "src/css/",
    "_src/img/": "src/img/",
    "_src/fonts/": "src/fonts/",
    "_src/js/": "src/js/",
    "_src/music/": "src/music/"
	});

  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("manifest.webmanifest");
  
  eleventyConfig.addLayoutAlias('post', 'post.njk');
  eleventyConfig.addLayoutAlias('page', 'page.njk');

  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addCollection("journal", function (collection) {
    return collection.getFilteredByGlob("journal/*.md");
  });

  eleventyConfig.addCollection("work", function (collection) {
    return collection.getFilteredByGlob("work/*.md");
  });

  eleventyConfig.addCollection("music", function (collection) {
    return collection.getFilteredByGlob("music/*.md");
  });

  eleventyConfig.addCollection("sharing", function (collection) {
    return collection.getFilteredByGlob("sharing/*.md");
  });

  eleventyConfig.setLiquidOptions({
    // Display dates in UTC (so they don't risk being off by one day)
    timezoneOffset: 0,
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  eleventyConfig.addFilter("readableYear", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "yyyy"
    );
  });

  module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.setBrowserSyncConfig({
      files: './_site/_src/css/**/*.css'
    });
    eleventyConfig.addLayoutAlias('post', '_layouts/post.njk');
  };
  
  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site",
    },
  };

}
