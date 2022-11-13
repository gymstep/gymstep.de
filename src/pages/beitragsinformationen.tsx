import * as React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const BeitragPage: React.FC<PageProps> = () => (
  <Layout>
    <h2>Beitragsinformationen</h2>
  </Layout>
)

export const Head = () => <Seo title="Beitragsinformationen" />

export default BeitragPage
