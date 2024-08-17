import Contact from '@/components/Contact'
import Consultation from '@/components/home/Consultation'
import Footer from '@/components/home/Footer'
import Header from '@/components/home/Header'
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
const page = () => {
  return (
    <>
    <Header/>
    <div>
    <Contact/>
    </div>
    <Footer/>
    <FloatingWhatsApp
        phoneNumber="+923392073100"
        accountName="Spearing Systems"
        statusMessage="Replies within 15 minutes"
        chatMessage="Hello there! How can I help you ?"
        avatar='images/logoAvatar.png'
        chatboxHeight={350}
        buttonClassName="floating-whatsapp-button"
        />  
    </>
  )
}

export default page