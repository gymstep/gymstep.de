import * as React from "react"
import { PageProps } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const YogaPage: React.FC<PageProps> = () => (
  <Layout>
    <h2>Yoga</h2>
  </Layout>
)

export const Head = () => <Seo title="Kurse & Angebote: Yoga" />

export default YogaPage
