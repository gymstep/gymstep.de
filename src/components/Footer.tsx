import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const links = [
  { to: '/impressum/', label: 'Impressum' },
]

const Footer: React.FC = () => (
  <footer>
    <nav
      style={{
        backgroundColor: '#aaa',
        color: '#fff',
        display: 'flex',
        fontSize: 'var(--font-sx)',
        lineHeight: 'var(--line-height-loose)',
        gap: 'var(--space-1) var(--space-3)',
        padding: 'var(--space-1) var(--space-3)',
        justifyContent: 'flex-end',
      }}
    >
      {links.map((link) => (
        <Link
          to={link.to}
          style={{
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  </footer>
)

export default Footer
