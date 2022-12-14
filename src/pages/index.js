import React from "react"
import Layout from "../components/layout/Layout"
import HeroBanner from "../components/mainpage/HeroBanner/HeroBanner"
import IconsBanner from "../components/mainpage/IconsBanner/IconsBanner"
import Community from "../components/mainpage/Community/Community"
import Features from "../components/mainpage/Features/Features"
import CookiesBar from "../components/mainpage/CookiesBar/CookiesBar"

export default function Home() {
  return (
    <Layout>
      <HeroBanner />
      <IconsBanner />
      <Community />
      <Features />
      <CookiesBar />
    </Layout>
  )
}
