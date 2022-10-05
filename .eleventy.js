const rssPlugin = require('@11ty/eleventy-plugin-rss');

// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

module.exports = config => {
  // Add filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('w3DateFilter', w3DateFilter);

  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('._redirects');
  config.addPassthroughCopy('./src/images/');
  config.addPassthroughCopy('./src/dl/');
  config.addPassthroughCopy('./src/site.webmanifest');
  config.addPassthroughCopy('./src/favicon.ico');
  config.addPassthroughCopy('./src/favicon-16x16.png');
  config.addPassthroughCopy('./src/favicon-32x32.png');
  config.addPassthroughCopy('./src/fonts/');
  config.addPassthroughCopy('src/admin/config.yml');
  config.addPassthroughCopy('src/admin/previews.js');
  config.addPassthroughCopy('src/admin/util.js');
  config.addPassthroughCopy('node_modules/nunjucks/browser/nunjucks-slim.js');

  // Plugins
  config.addPlugin(rssPlugin);


  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
