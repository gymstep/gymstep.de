import * as React from "react"

import Header from "./Header"
import Footer from "./Footer"
import "./layout.css"

const Layout: React.FC<React.PropsWithChildren<{ title?: string }>> = ({
  title,
  children,
}) => {
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `var(--size-content)`,
        padding: `var(--size-gutter)`,
      }}
    >
      <Header siteTitle={title} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
