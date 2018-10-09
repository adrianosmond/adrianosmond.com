import React from 'react'
import Helmet from 'react-helmet'
import cardImg from '../../assets/images/me-500.jpg';

const Meta = () => (
  <Helmet>
    <title>The personal site of Adrian Osmond - adrianosmond.com</title>
    <meta name="description" content="This is the personal site of front-end developer Adrian Osmond, where you can find out about me and my work." />

    {/* <!-- Google / Search Engine Tags --> */}
    <meta itemprop="name" content="The personal site of Adrian Osmond - adrianosmond.com" />
    <meta itemprop="description" content="This is the personal site of front-end developer Adrian Osmond, where you can find out about me and my work." />
    <meta itemprop="image" content={cardImg} />

    {/* <!-- Google / Search Engine Tags --> */}
    <meta property="og:url" content="http://adrianosmond.com" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="The personal site of Adrian Osmond - adrianosmond.com" />
    <meta property="og:description" content="This is the personal site of front-end developer Adrian Osmond, where you can find out about me and my work." />
    <meta property="og:image" content={cardImg} />

    {/* <!-- Google / Search Engine Tags --> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="The personal site of Adrian Osmond - adrianosmond.com" />
    <meta name="twitter:description" content="This is the personal site of front-end developer Adrian Osmond, where you can find out about me and my work." />
    <meta name="twitter:image" content={cardImg} />
  </Helmet>
)

export default Meta
