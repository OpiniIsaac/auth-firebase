import { Container } from '@mui/material'
import React from 'react'
import { useAuth } from '../context/AithProvider'

export default function Dashboard() {
     const{currentUser} = useAuth()
  return (
    <Container>

     <h1>Hello {currentUser.email}</h1>
    </Container>
  )
}
