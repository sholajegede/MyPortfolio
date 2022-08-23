import React, { ReactNode } from 'react'

import Header from './header'
import Footer from './footer'

interface LayoutProps {
  children?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between font-content antialiased">

      <main className="mb-auto">{children}</main>

    </div>
  )
}

export default Layout
