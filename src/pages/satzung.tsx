import * as React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const SatzungPage: React.FC<PageProps> = () => (
  <Layout>
    <h2>Satzung</h2>
  </Layout>
)

export const Head = () => <Seo title="Satzung" />

export default SatzungPage
