import React from 'react'
import { Header, } from "semantic-ui-react"
import Iframe from 'react-iframe'

const MyVideos = () => (
  <>
  <Header>MyVideos</Header>
  <Iframe width="1120" 
  height="630" 
  src="https://www.youtube.com/embed/1ihCEM_Cta4" 
  frameborder="0" 
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
  </Iframe>

  <Iframe width="1120" 
  height="630" 
  src="https://www.youtube.com/embed/UtF6Jej8yb4" 
  frameborder="0" 
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
  </Iframe>

  <Iframe width="1120" 
  height="630" 
  src="https://www.youtube.com/embed/-J7J_IWUhls"
  frameborder="0" 
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
  </Iframe>
  </>
)

export default MyVideos