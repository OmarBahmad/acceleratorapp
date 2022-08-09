import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/Layout"

export default function Home() {
  return (
    <Layout>
      <h1>Home Page!</h1>
      <div>
        <Link to="/about/">About</Link>
      </div>
    </Layout>
  )
}
