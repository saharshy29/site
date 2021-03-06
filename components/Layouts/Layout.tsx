import Head from 'next/head';
import layout from './Layout.module.scss';
import Nav from '../Nav';
import Footer from '../Footer';

const Layout = (props) => {
  return (
    <html lang="en">
      <Head>
        <title>Saharsh Yeruva | @saharshy29</title>
      </Head>
      <div className={layout.wrapper}>
        <div className={layout.contentWrapper}>
          <Nav />
          {props.children}
        </div>
        <Footer />
      </div>
    </html>
  );
};

export default Layout;
