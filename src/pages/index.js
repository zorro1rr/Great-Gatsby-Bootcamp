import React from "react"
import { Link } from "gatsby"
import Head from "../components/head"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Home" />
        <h1>Hello.</h1>
        <h2> I'm Justin, I live in SLC</h2>
        <p>
          Need a developer? <Link to="/contact">Contact me.</Link>
        </p>
      </Layout>
    </div>
  )
}

export default IndexPage
