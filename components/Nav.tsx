import Link from 'next/link';
import nav from './Nav.module.scss';

const Nav = () => {
  return (
    <div className={nav.root}>
      <div className={nav.group}>
        <Link href="/">
          <a className={nav.name}>Saharsh Yeruva</a>
        </Link>
        <a href="https://srsh.link/twitter" className={nav.username}>
          @saharshy29
        </a>
      </div>
      <div className={nav.group}>
        <Link href="/">
          <a className={nav.link}>About</a>
        </Link>
        <Link href="/blog">
          <a className={nav.link}>Thoughts</a>
        </Link>
        {/* <Link href="/projects">
          <a className={nav.link}>Projects</a>
        </Link>
        <Link href="/story">
          <a className={nav.link}>Story</a>
        </Link> */}
      </div>
    </div>
  );
};

export default Nav;
