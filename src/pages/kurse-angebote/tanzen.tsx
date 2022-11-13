import * as React from "react"
import { PageProps } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const TanzenPage: React.FC<PageProps> = () => (
  <Layout>
    <h2>Tanzen</h2>
  </Layout>
)

export const Head = () => <Seo title="Kurse & Angebote: Tanzen" />

export default TanzenPage
