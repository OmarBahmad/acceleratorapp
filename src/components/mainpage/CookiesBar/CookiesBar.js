import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import {
  CookiesBarContainer,
  CookiesBarContent,
  CookiesBarText,
  CookiesBarButtonContainer,
  CookiesBarAcceptButton,
  CookiesBarKnowMoreButton,
} from "./styles"

const CookiesBar = () => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    setShow( !localStorage.getItem("cookiesAccepted"))
  },[show])

  return (
    <>
      {show && (
        <CookiesBarContainer>
          <CookiesBarContent>
            <CookiesBarText>
              By using this site on the AcceleratorApp network, you agree with
              our use of cookies.
            </CookiesBarText>
            <CookiesBarButtonContainer>
              <CookiesBarAcceptButton
                onClick={() => {
                  localStorage.setItem("cookiesAccepted", true)
                  setShow(false)
                }}
              >
                Accept cookies
              </CookiesBarAcceptButton>
              <CookiesBarKnowMoreButton>
                Want to know more?
              </CookiesBarKnowMoreButton>
              <Link to="/">Read our Cookie Policy</Link>
            </CookiesBarButtonContainer>
          </CookiesBarContent>
        </CookiesBarContainer>
      )}
    </>
  )
}

export default CookiesBar
