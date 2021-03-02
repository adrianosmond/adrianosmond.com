import React from 'react';
import Helmet from 'react-helmet';
import cardImg from 'assets/images/me-500.jpg';

const Meta = () => (
  <Helmet htmlAttributes={{ lang: 'en' }}>
    <title>The personal site of Adrian Osmond - adrianosmond.com</title>
    <meta
      name="description"
      content="This is the personal site of front-end developer Adrian Osmond, where you can find out about me and my work."
    />
    <link
      rel="preload"
      as="style"
      href="https://fonts.googleapis.com/css2?family=Alegreya+Sans&family=Playfair+Display:wght@900&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Alegreya+Sans&family=Playfair+Display:wght@900&display=swap"
      media="print"
      onload="this.media='all'"
    />

    {/* <!-- Google / Search Engine Tags --> */}
    <meta
      itemprop="name"
      content="The personal site of Adrian Osmond - adrianosmond.com"
    />
    <meta
      itemprop="description"
      content="This is the personal site of front-end developer Adrian Osmond, where you can find out about me and my work."
    />
    <meta itemprop="image" content={cardImg} />

    {/* <!-- Google / Search Engine Tags --> */}
    <meta property="og:url" content="http://adrianosmond.com" />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="The personal site of Adrian Osmond - adrianosmond.com"
    />
    <meta
      property="og:description"
      content="This is the personal site of front-end developer Adrian Osmond, where you can find out about me and my work."
    />
    <meta property="og:image" content={cardImg} />

    {/* <!-- Google / Search Engine Tags --> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="The personal site of Adrian Osmond - adrianosmond.com"
    />
    <meta
      name="twitter:description"
      content="This is the personal site of front-end developer Adrian Osmond, where you can find out about me and my work."
    />
    <meta name="twitter:image" content={cardImg} />
  </Helmet>
);

export default Meta;
