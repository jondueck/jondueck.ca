const pluginRss = require("@11ty/eleventy-plugin-rss");

const { DateTime } = require("luxon");

const footnotes = require('eleventy-plugin-footnotes');

const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(eleventySass, {
    compileOptions: {
      permalink: function(contents, inputPath) {
        return (data) => data.page.filePathStem.replace("/_src/scss", "/src/css") + ".css";
      }
    },
    sass: {
      style: "compressed",
      sourceMap: true
    },
	});

  eleventyConfig.addPassthroughCopy({
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
  eleventyConfig.addPlugin(footnotes);

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
    return DateTime.fromJSDate(dateObj, { zone: "utc-6" }).toFormat(
      "d LLL yyyy"
    );
  });

  eleventyConfig.addFilter("readableYear", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc-6" }).toFormat(
      "yyyy"
    );
  });


  let options = {
    html: true,
    breaks: true,
    linkify: true
  };

  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItAnchor, {
    slugify: eleventyConfig.getFilter("slug"),
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  module.exports = function (eleventyConfig) {
    eleventyConfig.setServerOptions({
      // Whether the live reload snippet is used
      liveReload: true,
    });
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.setBrowserSyncConfig({
      files: ('./_site/src/css/*.css', './_src/scss/**/*.scss')
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
