import React, { Component }  from 'react'
// import Link from 'gatsby-link'
import HomepageHeader from '../components/HomepageHeader'
import Nav from '../components/Nav'
import ProjectGrid from '../components/ProjectGrid'
import SmoothScroll from '../lib/SmoothScroll'
import cvPdf from '../assets/adrian-osmond-cv.pdf'

class IndexPage extends Component {
  render () {
    return (
      <article>
        <HomepageHeader />
        <Nav />
        <div className="container">
          <div className="content">
            <section className="section" id="about-me">
              <h2 className="section__heading">About Me</h2>
              <p className="section__intro">
                The thing I like most about front-end development is collaborating with
                other great people to make the product you're working on the best
                thing that it can be. I love being challenged by great design. Being
                presented with a problem I don't know how to solve, breaking it down
                into solvable parts and piecing them together is one of the most
                satisfying parts of the job.
              </p>
              <p className="section__content">
                When building for the web there are several things that I care about quite
                strongly. Performance matters to me a lot - I've had too many bad experiences
                trying to get things done over a poor mobile connection to be able to ignore
                it. For similar reasons responsive design is important to me - if you tell me
                your users won't want to use this piece of functionality on mobile, there's
                a 99.9% chance you're wrong.
              </p>
              <p className="section__content">
                I believe progressive enhancement is a good practice because it means that you
                get the features that make the web great for free. It also means that you've
                got a better chance of delivering an experience when a user's network drops
                and it helps with performance. It also helps with accessibility, which is
                important to me.
              </p>
              <p className="section__content">
                Finally I don't think we should let these things get in the way of learning
                new things. The web is moving fast and it's important to me to keep improving
                and developing new skills. It's great that so many people are building so much
                cool stuff and releasing it for all of us to use. We should enjoy learning and
                experimenting with as much of it as we want, but not forget the other
                principles when we're shipping code professionally.
              </p>
              <p className="section__content">
                Outside of work I'm a keen runner, hiker and photographer - give me a
                mountain, my camera and a my running or hiking shoes and I'll be very happy.
                I've also recently started experimented with home brewing, which is like a
                chemistry lesson where you get beer at the end - what's not to love?!
              </p>
            </section>
            <section className="section" id="my-work">
              <h2 className="section__heading">My Work</h2>
              <p className="section__intro">
                Here are some of the clients I've had the privilege of working with. I'm in
                the process of building this site out and there'll be more info on what I did
                with these clients soon. In the mean time, if you'd like more details you can &nbsp;
                <a href={cvPdf} target="_blank">check out my CV</a> or &nbsp;
                <a href="#get-in-touch" onClick={SmoothScroll}>get in touch</a>
              </p>
              <ProjectGrid />
            </section>
            <section className="section">
              <h2 className="section__heading" id="get-in-touch">Get in Touch</h2>
              <div className="section__intro">
                <p>
                  Feel free to reach out to me if you have something to say or you think we should
                  work together. If you do want to get in touch, here are a few ways you can reach me:
                </p>
                <ul className="icon-grid icon-grid--small">
                  <li className="icon-grid__item">
                    <a className="icon-grid__tile" href="mailto:a.c.osmond@gmail.com">
                      <svg className="icon-grid__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path fill="#1258A0" d="M29 4h-26c-1.65 0-3 1.35-3 3v20c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-20c0-1.65-1.35-3-3-3zM12.461 17.199l-8.461 6.59v-15.676l8.461 9.086zM5.512 8h20.976l-10.488 7.875-10.488-7.875zM12.79 17.553l3.21 3.447 3.21-3.447 6.58 8.447h-19.579l6.58-8.447zM19.539 17.199l8.461-9.086v15.676l-8.461-6.59z"></path>
                      </svg>
                      <span className="icon-grid__title">Email</span>
                    </a>
                  </li>
                  <li className="icon-grid__item">
                    <a className="icon-grid__tile" href="https://uk.linkedin.com/in/adrian-osmond-889b2147" rel="noopener noreferrer" target="_blank">
                      <svg className="icon-grid__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path fill="#1258A0" d="M12 12h5.535v2.837h0.079c0.77-1.381 2.655-2.837 5.464-2.837 5.842 0 6.922 3.637 6.922 8.367v9.633h-5.769v-8.54c0-2.037-0.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509v8.688h-5.767v-18z"></path>
                        <path fill="#1258A0" d="M2 12h6v18h-6v-18z"></path>
                        <path fill="#1258A0" d="M8 7c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
                      </svg>
                      <span className="icon-grid__title">LinkedIn</span>
                    </a>
                  </li>
                  <li className="icon-grid__item">
                    <a className="icon-grid__tile" href="https://twitter.com/adrianosmond" rel="noopener noreferrer" target="_blank">
                      <svg className="icon-grid__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path fill="#1258A0" d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>
                      </svg>
                      <span className="icon-grid__title">Twitter</span>
                    </a>
                  </li>
                  <li className="icon-grid__item">
                    <a className="icon-grid__tile" href="https://www.instagram.com/adrianosmond/" rel="noopener noreferrer" target="_blank">
                      <svg className="icon-grid__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path fill="#1258A0" d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"></path>
                        <path fill="#1258A0" d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"></path>
                        <path fill="#1258A0" d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"></path>
                      </svg>
                      <span className="icon-grid__title">Instagram</span>
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </article>
    )
  }
}

export default IndexPage
