import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Meta from 'components/Meta';
import Nav from 'components/Nav';

const Layout = ({ title, children, footer }) => (
  <>
    <Meta />
    <Helmet title={title} />
    <Header />
    <Nav />
    <article className="container">
      <div className="content">{children}</div>
    </article>
    {footer}
  </>
);

export default Layout;
