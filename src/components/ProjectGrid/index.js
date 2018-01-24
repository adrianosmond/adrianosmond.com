import React from 'react';
import Link, { withPrefix } from 'gatsby-link'
const slug = (name) => name.trim().toLowerCase().replace(/\s/g, '-')

const iconAndTitle = (project) => (
  <div>
    <img src={withPrefix(project.logo)} alt={`${project.name} logo`} className="icon-grid__icon" />
    <span className="icon-grid__title">{project.name}</span>
  </div>
)

const ProjectGrid = ({ projects }) => (
  <ul className="icon-grid">
    {projects.map((project, idx) => (
      <li className="icon-grid__item" key={idx}>
        {project.page ?
          <Link to={slug(project.name)} className="icon-grid__tile">
            {iconAndTitle(project)}
          </Link> :
          <div className="icon-grid__tile icon-grid__tile--inactive">
            {iconAndTitle(project)}
          </div>
        }
      </li>
    ))}
  </ul>
)

export default ProjectGrid;
