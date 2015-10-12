import styles from './css';
import { pages, posts } from './data';
import { Feed, Home, Layout, Page, Post } from './templates';

function toFilename(path) {
  if(path.indexOf('.') < 0) { path += '/index.html'; }
  return path.replace(/^(\\|\/)+/, '');
}

export default function(render, done) {
  const renderHTML = (path, ...args) => render(toFilename(path), Layout(path, ...args));

  renderHTML('/', Home);
  pages.forEach(page => renderHTML(page.path, Page(page), page.title));
  posts.forEach(post => renderHTML(post.path, Post(post), post.title));
  render('feed.xml', Feed);
  render('styles.css', styles);
  done();
}
