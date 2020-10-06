import React from "react"
import Layout from "../components/layout"

import Head from "../components/head"
const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>contact</h1>
        <p>phone: 561-601-6167</p>
        <p>
          email: <a href="https://www.gmail.com">zorro1rr@gmail.com</a>
        </p>
      </Layout>
    </div>
  )
}

export default ContactPage
