import * as React from "react"
import { Link, PageProps } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const SatzungBeitragPage: React.FC<PageProps> = () => (
  <Layout>
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--space-3) var(--size-gap)',
      }}
    >
      <div>
        <h2 style={{ marginTop: 0 }}>Satzung</h2>
        <ul>
          <li>
            <Link to="/satzung/">Satzung anzeigen</Link>
          </li>
          <li>
            <a href="/downloads/satzung.pdf">Satzung herunterladen</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 style={{ marginTop: 0 }}>Beitragsinformationen</h2>
        <ul>
          <li>
            <Link to="/beitragsinformationen/">Beitragsinformationen anzeigen</Link>
          </li>
          <li>
            <a href="/downloads/beitragsinformationen.pdf">Beitragsinformationen herunterladen</a>
          </li>
        </ul>
      </div>
    </div>

  </Layout>
)

export const Head = () => <Seo title="Impressum" />

export default SatzungBeitragPage
