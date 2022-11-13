import * as React from "react"
import { PageProps } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const GymnastikPage: React.FC<PageProps> = () => (
  <Layout>
    <h2>Gymnastik</h2>
  </Layout>
)

export const Head = () => <Seo title="Kurse & Angebote: Gymnastik" />

export default GymnastikPage
