import * as React from "react"
import { PageProps } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const SteptanzPage: React.FC<PageProps> = () => (
  <Layout>
    <h2>Steptanz</h2>
  </Layout>
)

export const Head = () => <Seo title="Kurse & Angebote: Steptanz" />

export default SteptanzPage
