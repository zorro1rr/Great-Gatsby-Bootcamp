import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const aboutPage = () => {
  return (
    <div>
      <Layout>
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
