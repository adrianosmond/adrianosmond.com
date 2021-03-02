import React from 'react';
import Helmet from 'react-helmet';
import HomepageHeader from '../HomepageHeader';
import Meta from '../Meta';
import Nav from '../Nav';

const Layout = ({ title, children, footer }) => (
  <>
    <Meta />
    <Helmet title={title} />
    <HomepageHeader />
    <Nav />
    <article className="container">
      <div className="content">{children}</div>
    </article>
    {footer}
  </>
);

export default Layout;
