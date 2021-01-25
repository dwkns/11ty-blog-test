const moment = require('moment');
const util = require('util');

module.exports = (eleventyConfig) => {
eleventyConfig.addPassthroughCopy({ 'src/public': './' });
eleventyConfig.addPassthroughCopy({ 'src/admin/config.yml': './admin/config.yml' });

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("src/admin/config.yml");
};


// eleventyConfig.setTemplateFormats([
//   "yml",
//   "css" // css is not yet a recognized template extension in Eleventy
// ]);

// Some readable date components as filters.
moment.locale('en');
eleventyConfig.addFilter('dateIso', date => {
  return moment(date).toISOString();
});

eleventyConfig.addFilter('dateReadable', date => {
  return moment(date).utc().format('LL'); // E.g. May 31, 2019
});


eleventyConfig.addFilter('console', function(value) {
  return util.inspect(value);
});

  eleventyConfig.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  });

  eleventyConfig.setDataDeepMerge(true);


  return {

    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_includes/_layouts',
      data: '_data',
    },
  };
};