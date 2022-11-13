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

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <p>
      <b>
        Herzlich willkommen auf den Internetseiten unseres Vereins, dem
        Gymnastik- und Steptanz-Verein Fortuna Biesdorf e.V.
      </b>
    </p>
    <p>Hier kannst Du Dich über den Verein und unsere Angebote informieren.</p>
    <p>
      Mit unserem Freizeitsport wollen wir fit und aktiv bleiben, die
      Beweglichkeit erhalten und uns wohlfühlen. Im Mittelpunkt stehen Spaß und
      Freude an der Bewegung zur Musik.
    </p>
    <p>
      Bei Interesse kannst du gern vorbeikommen und bei einer kostenlosen
      Probestunde mitmachen.
    </p>
    <p>
      Unser Verein bietet in Marzahn, Hellersdorf und Köpenick folgende
      Sportarten an:
    </p>
    <ul>
      {links.map((link) => (
        <li>
          <Link to={link.to}>{link.label}</Link>
        </li>
      ))}
    </ul>
    <p>
      Hier kann der{" "}
      <a href="/downloads/aufnahmeantrag.pdf" target="_blank">
        Aufnahmeantrag
      </a>{" "}
      heruntergeladen werden.
    </p>
  </Layout>
)

export const Head = () => <Seo title="Startseite" />

export default IndexPage
