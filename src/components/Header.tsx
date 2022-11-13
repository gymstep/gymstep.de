import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const links = [
  { to: '/', label: 'Startseite' },
  { to: '/kurse-angebote/', label: 'Kurse & Angebote' },
  { to: '/termine/', label: 'Termine' },
  { to: '/ueber-uns/', label: 'Über uns' },
  { to: '/satzung-beitrag/', label: 'Satzung & Beitrag' },
  { to: '/kontakt/', label: 'Kontakt' },
]

const Header: React.FC<{ siteTitle?: string }> = ({ siteTitle = "" }) => (
  <header>
    <Link to="/">
      <StaticImage
        src="../images/collage.jpg"
        loading="eager"
        width={960}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ width: '100%', height: 'auto', marginBottom: `var(--space-3)` }}
      />
    </Link>
    <h1 style={{ margin: '0 0 var(--space-3)' }}>
      Gymnastik- und Steptanz-Verein Fortuna Biesdorf e.V.
    </h1>
    <nav
      style={{
        backgroundColor: '#aaa',
        color: '#fff',
        lineHeight: 'var(--line-height-loose)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--space-1) var(--space-3)',
        padding: 'var(--space-1) var(--space-3)',
        marginBottom: `var(--space-4)`,
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
  </header>
)

export default Header
