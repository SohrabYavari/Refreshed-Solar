import { Container, Paper } from '@mui/material'
import React from 'react'
import Hero from '../../Global/Hero'
import Quotes from './Components/assets/Quotes.jpg'
import ContactForm from './Components/ContactForm'
import ContactInfo from './Components/ContactInfo'
import './Components/styles/ContactPage.css'

export default function ContactPage() {
  return (
    <React.Fragment>
      <Container
        sx={{
          py: 2,
          pb: 10,
        }}
      >
        <Hero 
          heroTitle="Contact Us"
          heroMessage="The next steps to a Brighter Future!"
          heroImg={Quotes}
        />
          <div className='contactContainer' >
            <ContactInfo />
            <ContactForm />
          </div>
      </Container>
    </React.Fragment>
  )
}
