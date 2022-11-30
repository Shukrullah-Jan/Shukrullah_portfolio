
import React from 'react'
import './about.css'
import ME from '../../assets/me_brush_effect3.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">

                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="Shukrullah Askari" />
                    </div>
                </div>
                <div className="about__content">

                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers />
                            <h5>Clients</h5>
                            <small>20+ clients</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary />
                            <h5>Projects</h5>
                            <small>40+ Projects Completed</small>
                        </article>


                    </div>

                    <p>Inquisitive and energetic software, full stack MERN developer and instructor. Skilled in management and leadership with strong foundation in logic, UI design, web and desktop app developement.</p>
                    <a href="#contacts" className='btn btn-primary'>Let's Talk</a>

                </div>
            </div>
        </section>
    )
}

export default About;