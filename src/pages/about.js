import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const aboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>About:</h1>
        <p>
          My name is justin howard, I am a web developer living in Salt Lake
          City!
        </p>
        <p>
          Need a developer? <Link to="/contact">Contact me.</Link>
        </p>
      </Layout>
    </div>
  )
}

export default aboutPage
