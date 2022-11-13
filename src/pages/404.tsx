import * as React from "react"
import { HeadFC, PageProps } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const NotFoundPage: React.FC<PageProps> = () => (
  <Layout>
    <h2>Das ist nicht die Seite nach der ihr sucht</h2>
  </Layout>
)

export const Head: HeadFC = () => <Seo title="Das ist nicht die Seite nach der ihr sucht" />

export default NotFoundPage
