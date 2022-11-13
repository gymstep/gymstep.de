import * as React from "react"
import { PageProps } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const SeniorengymnastikPage: React.FC<PageProps> = () => (
  <Layout>
    <h2>Seniorengymnastik</h2>
  </Layout>
)

export const Head = () => <Seo title="Kurse & Angebote: Seniorengymnastik" />

export default SeniorengymnastikPage
