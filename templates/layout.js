import { site } from '../data';
import Header from './header';

export default (path, content, title) => `
  <!doctype html>
  <html AMP lang='en'>
    <head>
      <meta charset='utf-8'>
      <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui'>
      <meta name='description' content='${site.description}'>
      <link rel='canonical' href='${site.url + site.baseurl + path}'>
      <title>${site.name + (title ? ' | ' + title : '')}</title>
      <link href='https://fonts.googleapis.com/css?family=Croissant+One|Hind+Vadodara' rel='stylesheet' type='text/css'>
      <style>body {opacity: 0}</style><noscript><style>body {opacity: 1}</style></noscript>
      <script async src='https://cdn.ampproject.org/v0.js'></script>
    </head>
    <body>
      ${Header}
      ${content}
    </body>
  </html>
`
