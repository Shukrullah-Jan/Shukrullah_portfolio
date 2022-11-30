import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Desktop App Developement</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>UI, Dashboard and Form design with material design libraries.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Building and packaging user friendly and fully responsive applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Building efficient and fully optimised desktop apps using best algorithms.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Have a set of pre built softwares however, will create any applications according to client requirements.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Any sofware built have a fully backup system for data.</p>
            </li>
          </ul>
        </article>
        {/* end of Desktop developement */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Building and Deploying any kind of e-commerce websites from scratch.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Building user friendly and fully responsive web apps.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Have a set of templates however will create any websites according to client preferences.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Management, Debugging, Code optimization and rebuilding old websites. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Advertise using google Ads.</p>
            </li>
          </ul>
        </article>
        {/* End of Web Developement */}
        <article className='service'>
          <div className="service__head">
            <h3>Tutoring & Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Instructing with best materials and building real life projects.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Involving students in projects and giving plenty of quizzes weekly to work on.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Writing blog posts, updating contents, and running websites for clients.</p>
            </li>
          </ul>
        </article>
        {/* End of content Creation */}
      </div>
    </section>
  )
}

export default Services