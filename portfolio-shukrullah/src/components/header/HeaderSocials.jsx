import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
    return (
        <div className='nav__socials'>
            <a href="https://dribbble.com/A_S_K_A_R_I" target='_blank'><FiDribbble/></a>
            <a href="https://www.facebook.com/Meraj.askarii" target='_blank'><BsFacebook/></a>
            <a href="https://github.com/Shukrullah-Jan" target='_blank'><BsGithub/></a>
        </div>
    )
}

export default HeaderSocials