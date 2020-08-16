import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>PAGE TEMPLATE HEADING</h1>
    <p>Page template paragraph</p>
    <Link to="/">return to index</Link>
  </Layout>
)

export default SecondPage
