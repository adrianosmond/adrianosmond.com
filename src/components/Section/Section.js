import React from 'react';

import './Section.css';

const Section = ({ title, id, intro, children }) => (
  <section className="section" id={id}>
    <h2 className="section__heading">{title}</h2>
    <div className="section__intro">{intro}</div>
    {children}
  </section>
);

export default Section;
