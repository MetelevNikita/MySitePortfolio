"use client"

import { Container } from "react-bootstrap"

// components

import Header from "@/components/Header/Header"


const layout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}

export default layout
