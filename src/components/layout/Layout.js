import React from "react"
import Navbar from "../header/Navbar"
import Footer from "../footer/Footer"
import { LayoutContainer } from "./styles"

export const Layout = ({children}) => {
  return (
    <LayoutContainer>
      <Navbar />
      {children}
      <Footer />
    </LayoutContainer>
  )
}
export default Layout;
