import React, { useState } from 'react'
import { Hamburger } from './Hamburger'
import { Social } from './Social'

export const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div onClick={() => setOpen(!open)} style={{ left: open ? '0vw' : '100vw' }} className="darkred-con">
        <div className="menu">
          <a href="#landing">HOME</a>
          <a href="#about">ABOUT US</a>
          <a href="#services">SERVICES</a>
          <a href="#contact">CONTACT US</a>
        </div>
        <div>
          <Social />
          <h5> Copyrights © 2021 <a href="https://www.netspiders.in">Net Spiders</a>.
          <br />
          All rights reserved </h5>
        </div>
      </div>

      <header>
        <div className="menu-container">
          <a href="#landing">
            <img src="logo.png" alt="Net Spiders Logo" title="Net Spiders Logo" />
          </a>
          <div className="menu">
            <a href="/">HOME</a>
            <a href="#about">ABOUT US</a>
            <a href="#services">SERVICES</a>
            <a href="#contact">CONTACT US</a>
          </div>
          <Hamburger
            open={open}
            setOpen={setOpen}
          />
        </div>
      </header>
    </>
  )
}
