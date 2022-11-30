import React from 'react'
import './nav.css'
import { TiHomeOutline } from 'react-icons/ti'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { TbMessage } from 'react-icons/tb'

const Nav = () => {

  const [activeTab, setActiveTab] = React.useState('#')

  return (
    <section id='nav'>

      <a href="#" className={activeTab === '#' ? 'active' : ''} onClick={() => {
        setActiveTab("#")
      }}><TiHomeOutline /></a>
      <a href="#about" className={activeTab === '#about' ? 'active' : ''} onClick={() => {
        setActiveTab("#about")
      }}><AiOutlineUser /></a>
      <a href="#experience" className={activeTab === '#experience' ? 'active' : ''} onClick={() => {
        setActiveTab("#experience")
      }}><BiBook /></a>
      <a href="#services" className={activeTab === '#services' ? 'active' : ''} onClick={() => {
        setActiveTab("#services")
      }}><RiServiceLine /></a>
      <a href="#contacts" className={activeTab === '#contacts' ? 'active' : ''} onClick={() => {
        setActiveTab("#contacts")
      }}><TbMessage /></a>

    </section>
  )
}

export default Nav