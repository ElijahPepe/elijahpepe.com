import React from 'react'
import { Link } from 'gatsby'

import gatsby from '../../content/thumbnails/gatsby.png'
export default function Footer() {
  return (
    <footer className="footer flex">
      <section className="container">
        <nav className="footer-links">
          <Link to="/blog">Articles</Link>
          <Link to="/guides">Guides</Link>
          <a
            href="https://elijahpepe.substack.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Newsletter
          </a>
          <Link to="/rss.xml">RSS</Link>
          <a
            href="https://ko-fi.com/elijahpepe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate
          </a>
          <a
            href="https://patreon.com/elijahpepe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Patreon
          </a>
        </nav>
        <nav className="flex justify-center">
          <a
            href="https://www.gatsbyjs.org/"
            title="Built with Gatsby"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img src={gatsby} className="footer-img" alt="Gatsby" />
          </a>
        </nav>
      </section>
    </footer>
  )
}
