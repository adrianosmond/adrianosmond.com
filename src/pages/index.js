import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from 'components/Layout';
import ContactGrid from 'components/ContactGrid';
import Section from 'components/Section';
import cvPdf from 'assets/adrian-osmond-cv.pdf';

const IndexPage = () => (
  <Layout
    title="The personal site of Adrian Osmond - adrianosmond.com"
    footer={
      <StaticImage
        src="../assets/images/me-mountain.jpg"
        alt="Me in Arthur's Pass National Park, New Zealand"
        aspectRatio={15 / 10}
        layout="fullWidth"
        formats={['auto', 'webp', 'avif']}
      />
    }
  >
    <>
      <Section
        id="about-me"
        title="About me"
        intro={
          <p>
            I'm a UK born, Amsterdam based front-end developer. I enjoy working
            on well-designed solutions to interesting problems with smart
            people. If you're interested in knowing more about what I've done
            professionally, you can{' '}
            <a href={cvPdf} target="_blank" rel="noopener noreferrer">
              take a look at my CV
            </a>
          </p>
        }
      >
        <p>
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
      </Section>
      <Section
        id="get-in-touch"
        title="Get in touch"
        intro={
          <>
            <p>
              Feel free to reach out to me if you have something to say or you
              think we should work together. If you do want to get in touch,
              here are a few ways you can reach me:
            </p>
            <ContactGrid />
          </>
        }
      />
    </>
  </Layout>
);

export default IndexPage;
