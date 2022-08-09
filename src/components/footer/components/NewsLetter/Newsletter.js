import React from "react"

import {
  NewsLetterContainer,
  NewsLetterContent,
  NewsLetterTitle,
  NewsLetterLabel,
  NewsLetterInput,
} from "./styles"

const Newsletter = () => {
  return (
    <NewsLetterContainer>
      <NewsLetterContent>
        <NewsLetterTitle>Join our growing community</NewsLetterTitle>
        <NewsLetterLabel>
          Sign up for news and updates about AcceleratorApp
        </NewsLetterLabel>
        <NewsLetterInput>
          <input type="text" placeholder="Your email" />
        </NewsLetterInput>
      </NewsLetterContent>
    </NewsLetterContainer>
  )
}

export default Newsletter
