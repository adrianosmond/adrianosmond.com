import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
// import me300 from 'assets/images/me-300-gray.jpg';
// import me600 from 'assets/images/me-600-gray.jpg';
// import me1000 from 'assets/images/me-1000-gray.jpg';
// import me1880 from 'assets/images/me-1880-gray.jpg';
import './Header.css';

// <img
//   className="me"
//   src={me300}
//   srcSet={`${me300} 148w, ${me600} 296w, ${me1000} 493w, ${me1880} 926w`}
//   sizes="(max-width: 36em) 148px, 50vh"
//   alt="Adrian Osmond"
//   width="900"
//   height="1827"
// />

const Header = () => (
  <>
    <StaticImage
      src="../../assets/images/me-1880-gray.jpg"
      alt="Adrian Osmond"
      aspectRatio={926 / 1880}
      formats={['auto', 'webp', 'avif']}
      loading="eager"
      className="me"
      imgStyle={{
        objectFit: "contain",
        objectPosition: "0 0",
      }}    
    />
    <h1 className="welcome">
      <span className="welcome__hello">Hello!</span>
      <br />
      <span className="welcome__name">I'm Adrian Osmond,</span>
      <br />
      <span className="welcome__job">a front-end developer.</span>
    </h1>
  </>
);

export default Header;
