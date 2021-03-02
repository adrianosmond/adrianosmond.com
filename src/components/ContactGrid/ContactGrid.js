import React from 'react';

import './ContactGrid.css';

const ContactGrid = () => (
  <ul className="contact-grid">
    <li className="contact-grid__item">
      <a className="contact-grid__tile" href="mailto:a.c.osmond@gmail.com">
        <svg
          className="contact-grid__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path
            fill="#1258A0"
            d="M29 4h-26c-1.65 0-3 1.35-3 3v20c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-20c0-1.65-1.35-3-3-3zM12.461 17.199l-8.461 6.59v-15.676l8.461 9.086zM5.512 8h20.976l-10.488 7.875-10.488-7.875zM12.79 17.553l3.21 3.447 3.21-3.447 6.58 8.447h-19.579l6.58-8.447zM19.539 17.199l8.461-9.086v15.676l-8.461-6.59z"
          ></path>
        </svg>
        <span className="contact-grid__title">Email</span>
      </a>
    </li>
    <li className="contact-grid__item">
      <a
        className="contact-grid__tile"
        href="https://uk.linkedin.com/in/adrian-osmond-889b2147"
        rel="noopener noreferrer"
        target="_blank"
      >
        <svg
          className="contact-grid__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path
            fill="#1258A0"
            d="M12 12h5.535v2.837h0.079c0.77-1.381 2.655-2.837 5.464-2.837 5.842 0 6.922 3.637 6.922 8.367v9.633h-5.769v-8.54c0-2.037-0.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509v8.688h-5.767v-18z"
          ></path>
          <path fill="#1258A0" d="M2 12h6v18h-6v-18z"></path>
          <path
            fill="#1258A0"
            d="M8 7c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"
          ></path>
        </svg>
        <span className="contact-grid__title">LinkedIn</span>
      </a>
    </li>
    <li className="contact-grid__item">
      <a
        className="contact-grid__tile"
        href="https://twitter.com/adrianosmond"
        rel="noopener noreferrer"
        target="_blank"
      >
        <svg
          className="contact-grid__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path
            fill="#1258A0"
            d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"
          ></path>
        </svg>
        <span className="contact-grid__title">Twitter</span>
      </a>
    </li>
    <li className="contact-grid__item">
      <a
        className="contact-grid__tile"
        href="https://www.github.com/adrianosmond/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <svg
          className="contact-grid__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 438.5 438.5"
        >
          <path
            fill="#1258A0"
            d="M409.1 114.6A218.3 218.3 0 00219.3 5.4 218.3 218.3 0 000 224.7c0 47.7 14 90.7 41.8 128.8 28 38.2 64 64.6 108 79.3 5.2 1 9 .2 11.5-2 2.5-2.3 3.7-5.2 3.7-8.6a6589.9 6589.9 0 00-.3-40.8l-6.5 1.1a120.7 120.7 0 01-35.7-1c-6.9-1.2-13.3-4-19.2-8.5a36.2 36.2 0 01-12.5-17.6l-2.9-6.6a71.3 71.3 0 00-9-14.5c-4-5.4-8.2-9-12.4-10.9l-2-1.4a21 21 0 01-6.3-7.4c-.5-1.4 0-2.5 1.5-3.3 1.5-.9 4.3-1.3 8.2-1.3l5.8.9c3.8.7 8.5 3 14 6.8a46 46 0 0114 14.9 50.3 50.3 0 0015.8 17.8c6.2 4 12.4 6.1 18.7 6.1 6.3 0 11.7-.4 16.3-1.4 4.5-1 8.8-2.4 12.8-4.3a46.3 46.3 0 0114-29.4 195.5 195.5 0 01-29.3-5.1c-8.6-2.3-17.6-6-26.8-11.2a76.9 76.9 0 01-23-19 92 92 0 01-15-30 142.6 142.6 0 01-5.8-42.9c0-23 7.5-42.6 22.5-58.8-7-17.3-6.4-36.7 2-58.3 5.5-1.7 13.7-.4 24.6 3.9a171.7 171.7 0 0136 18.7 203 203 0 01109.6 0l10.8-6.8c7.5-4.6 16.2-8.8 26.3-12.6 10-3.8 17.8-4.9 23.1-3.1 8.6 21.5 9.4 40.9 2.3 58.2a83.3 83.3 0 0122.6 58.8c0 16.2-2 30.5-5.9 43a88.4 88.4 0 01-15.1 30 79.8 79.8 0 01-23.1 19c-9.3 5-18.2 8.8-26.9 11-8.6 2.4-18.4 4-29.2 5.2 9.9 8.6 14.8 22.1 14.8 40.6v60.2c0 3.4 1.2 6.3 3.6 8.6 2.4 2.2 6.1 3 11.3 2 44.1-14.7 80.1-41.1 108-79.3a213.1 213.1 0 0041.8-128.9c0-39.7-9.8-76.4-29.4-110z"
          />
        </svg>
        <span className="contact-grid__title">Github</span>
      </a>
    </li>
    <li className="contact-grid__item">
      <a
        className="contact-grid__tile"
        href="https://www.instagram.com/adrianosmond/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <svg
          className="contact-grid__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path
            fill="#1258A0"
            d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"
          ></path>
          <path
            fill="#1258A0"
            d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"
          ></path>
          <path
            fill="#1258A0"
            d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"
          ></path>
        </svg>
        <span className="contact-grid__title">Instagram</span>
      </a>
    </li>
  </ul>
);

export default ContactGrid;
