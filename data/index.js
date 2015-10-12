import site from './site.yml';
site.baseurl = site.baseurl || '';

const toPath = file => file.replace(/\.\/.*?\//, '/').replace(/\..*$/, '');
const mapFn = file => ({ path: toPath(file), ...require(file) });

const pages  = require.context('.', true, /\/pages\// ).keys().reverse().map(mapFn);
const posts  = require.context('.', true, /\/posts\// ).keys().reverse().map(mapFn);

export default { pages, posts, site };
