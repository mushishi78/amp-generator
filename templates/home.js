import { stripHTML, prettyDate } from '../utils';
import { site, posts } from '../data';

const summary = post => stripHTML(post.__content).substring(0, 300) + '...';

const PostListItem = post => `
  <a href='${site.baseurl + post.path}' class='posts-item'>
    <h3>${post.title}</h3>
    <time>${prettyDate(post.date)}</time>
    <p>${summary(post)}</p>
  </a>
`

export default `<main>${posts.map(PostListItem).join('')}</main>`
