import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styling/square.css"
import "../styling/scrollText.css"
import MainLanding from "./landingPage"
import PhotoContent from "./photoContent"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    {/*<div className="spinner"/>*/}
    <MainLanding/>
    {/*<PhotoContent/>*/}

  </Layout>
)

export default IndexPage
