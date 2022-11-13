import * as React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const ImpressumPage: React.FC<PageProps> = () => (
  <Layout>
    <h2>Impressum</h2>
  </Layout>
)

export const Head = () => <Seo title="Impressum" />

export default ImpressumPage
