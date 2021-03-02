import React from 'react';
import Layout from 'components/Layout';
import ContactGrid from 'components/ContactGrid';
import cvPdf from 'assets/adrian-osmond-cv.pdf';
import meMountain300 from 'assets/images/me-mountain-300.jpg';
import meMountain600 from 'assets/images/me-mountain-600.jpg';
import meMountain900 from 'assets/images/me-mountain-900.jpg';
import meMountain1200 from 'assets/images/me-mountain-1200.jpg';
import meMountain1500 from 'assets/images/me-mountain-1500.jpg';
import './index.css';

const IndexPage = () => (
  <Layout
    title="The personal site of Adrian Osmond - adrianosmond.com"
    footer={
      <img
        src={meMountain300}
        srcSet={`${meMountain300} 300w, ${meMountain600} 600w, ${meMountain900} 900w, ${meMountain1200} 1200w, ${meMountain1500} 1500w`}
        alt="Me in Arthur's Pass National Park, New Zealand"
        style={{ display: 'block' }}
        width="1500"
        height="1000"
        sizes="100vw"
      />
    }
  >
    <>
      <section className="section" id="about-me">
        <h2 className="section__heading">About Me</h2>
        <p className="section__intro">
          I'm a UK born, Amsterdam based front-end developer. I enjoy working on
          well-designed solutions to interesting problems with smart people. If
          you're interested in knowing more about what I've done professionally,
          you can{' '}
          <a href={cvPdf} target="_blank" rel="noopener noreferrer">
            take a look at my CV
          </a>
        </p>
        <p className="section__content">
          Outside of work I love hiking and photography. You can read a bit more
          about that and see some photos I took in{' '}
          <a
            href="https://addressless.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            a site that I made
          </a>{' '}
          when my wife and I spent 3 months in a campervan travelling around New
          Zealand before we moved from London to Amsterdam.
        </p>
      </section>
      <section className="section" id="get-in-touch">
        <h2 className="section__heading">Get in Touch</h2>
        <div className="section__intro">
          <p>
            Feel free to reach out to me if you have something to say or you
            think we should work together. If you do want to get in touch, here
            are a few ways you can reach me:
          </p>
          <ContactGrid />
        </div>
      </section>
    </>
  </Layout>
);

export default IndexPage;
