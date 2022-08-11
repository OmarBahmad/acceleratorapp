import React from "react"
import Layout from "../components/layout/Layout"
import HeroBanner from "../components/mainpage/HeroBanner/HeroBanner"
import IconsBanner from "../components/mainpage/IconsBanner/IconsBanner"

export default function Home() {
  return (
    <Layout>
      <HeroBanner />
      <IconsBanner />
    </Layout>
  )
}
