import { site } from '../data';

export default `
  <header>
    <h1>
      <a href='${site.baseurl}' class='logo'/>${site.name}</a>
    </h1>
    <nav>
      <a href='${site.baseurl}/about'>About </a>
      <a href='${site.baseurl}/feed.xml' target='_blank'>RSS </a>
      <a href='${site.github}' target='_blank'>GitHub</a>
    </nav>
  </header>
`
