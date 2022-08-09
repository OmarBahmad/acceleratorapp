import React from "react"
import Navbar from "../header/Navbar"
import Footer from "../footer/Footer"
import { LayoutContainer, LayoutContent } from "./styles"

import "normalize.css"

export const Layout = ({children}) => {
  return (
    <LayoutContainer>
      <Navbar />
      <LayoutContent>   
        {children}
      </LayoutContent>
      <Footer />
    </LayoutContainer>
  )
}
export default Layout;
