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
              <p>Application Development: Specializing in the development and packaging of user-friendly, fully responsive applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desktop Application Optimization: Building efficient and highly optimized desktop applications utilizing the best algorithms.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom Software Solutions: Providing a range of pre-built software solutions and creating tailored applications to meet specific client requirements.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Data Backup Systems: Ensuring all software developed includes a comprehensive data backup system.</p>
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
              <p>E-commerce Development: Building and deploying a wide range of e-commerce websites from scratch.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Application Development: Creating user-friendly and fully responsive web applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom Website Design: Offering a variety of templates while also creating websites tailored to client preferences.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website Management and Optimization: Providing services for the management, debugging, code optimization, and rebuilding of old websites. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Digital Advertising.</p>
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
              <p>Educational Instruction: Providing high-quality instructional materials and building real-life projects.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Student Engagement: Involving students in hands-on projects and administering weekly quizzes.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Content Creation and Website Management: Writing blog posts, updating content, and managing websites for clients.</p>
            </li>
          </ul>
        </article>
        {/* End of content Creation */}
      </div>
    </section>
  )
}

export default Services