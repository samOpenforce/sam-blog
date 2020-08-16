import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>tasaal</h1>
    <p></p>
    <Link to="/blog/">blog</Link> <br />
    <Link to="/snippets/">snippets</Link> <br />
    <Link to="/contact/">contact</Link> <br />
  </Layout>
)

export default IndexPage
