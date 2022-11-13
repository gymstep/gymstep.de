import * as React from "react"
import { Link, PageProps } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const links = [
  { to: "/kurse-angebote/gymnastik/", label: "Gymnastik" },
  { to: "/kurse-angebote/seniorengymnastik/", label: "Seniorengymnastik" },
  { to: "/kurse-angebote/steptanz/", label: "Steptanz" },
  { to: "/kurse-angebote/tanzen/", label: "Tanzen" },
  { to: "/kurse-angebote/yoga/", label: "Yoga" },
]

const CoursePage: React.FC<PageProps> = () => (
  <Layout>
    <h2>Kurse & Angebote</h2>
    <ul>
      {links.map((link) => (
        <li>
          <Link to={link.to}>{link.label}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Startseite" />

export default CoursePage
