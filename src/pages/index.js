import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TabBar from "../components/TabBar"
import Sidebar from "../components/Sidebar"

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <div className="flex">
      <div className="sidebar w-1/5 h-screen hidden md:block" >
        <Sidebar />
      </div>
      <div className="tabbar w-screen h-screen md:w-4/5 ">
        <TabBar />
      </div>
    </div>
  </Layout>
)

export default IndexPage
