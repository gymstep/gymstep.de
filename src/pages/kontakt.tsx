import * as React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const KontaktPage: React.FC<PageProps> = () => (
  <Layout>
    <h2>Kontakt</h2>
  </Layout>
)

export const Head = () => <Seo title="Kontakt" />

export default KontaktPage
