import * as React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const TerminePage: React.FC<PageProps> = () => (
  <Layout>
    <h2>Termine</h2>
  </Layout>
)

export const Head = () => <Seo title="Termine" />

export default TerminePage
