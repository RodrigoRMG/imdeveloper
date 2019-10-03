import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Sidebar from "../components/Sidebar"

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <div className="flex ">
        <Sidebar />
    </div>
  </Layout>
)

export default IndexPage
