import * as React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const AboutUsPage: React.FC<PageProps> = () => (
  <Layout>
    <h2>Über uns</h2>
  </Layout>
)

export const Head = () => <Seo title="Über uns" />

export default AboutUsPage
