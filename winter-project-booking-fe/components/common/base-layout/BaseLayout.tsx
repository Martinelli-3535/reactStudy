import React from 'react'
import styled from '@emotion/styled'

import Header from '../header'
import Footer from '../footer'

interface BaseLayoutProps {
  children: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

export default BaseLayout

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
