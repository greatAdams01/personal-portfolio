'use client'

import { createContext, useContext, useState } from 'react'

const ContactContext = createContext()

export function ContactProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ContactContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ContactContext.Provider>
  )
}

export function useContact() {
  const context = useContext(ContactContext)
  if (!context) {
    throw new Error('useContact must be used within ContactProvider')
  }
  return context
}

