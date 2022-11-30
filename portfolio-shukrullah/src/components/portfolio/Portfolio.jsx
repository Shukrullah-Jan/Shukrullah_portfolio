
import React from 'react'
import './portfolio.css'
import flexibleDashboard from '../../assets/portfolio/flexible_dashboard.jpg'
import talentSystem from '../../assets/portfolio/tics_system.PNG'
import notepad from '../../assets/portfolio/notepad.PNG'
import gymSystem from '../../assets/portfolio/gym_system.PNG'
import foodInventory from '../../assets/portfolio/food_inventory.jpg'
import miniWeb from '../../assets/portfolio/mini_web.jpg'



const data = [
  {
    id: 1,
    image: flexibleDashboard,
    title: "Flexible Dashboard (JS, Bootstrap, Jquery)",
    github: 'https://github.com/Shukrullah-Jan/Flexible-Dashboard',
    demo: "https://flexible-dashboard-pierce.netlify.app/"
  },
  {
    id: 2,
    image: miniWeb,
    title: "Mini Web Projects (HTML, CSS, JS)",
    github: 'https://github.com/Shukrullah-Jan/Mini-Web-projects',
    demo: "https://mini-web-projects.netlify.app/"
  },
  {
    id: 3,
    image: talentSystem,
    title: "Computer Lab Management System (C#, .Net)",
    github: 'https://github.com/Shukrullah-Jan/Talent-Addmission-System',
    demo: "https://www.youtube.com/watch?v=3sm4bXrkyAs"
  },
  {
    id: 4,
    image: foodInventory,
    title: "Food Inventory App (C#, .Net, Access DB)",
    github: 'https://github.com/Shukrullah-Jan/Food-Inventory',
    demo: "https://www.youtube.com/watch?v=Sg4Qbawnf2Q"
  },
  {
    id: 5,
    image: notepad,
    title: "Notepad+ (C#, Winforms)",
    github: 'https://github.com/Shukrullah-Jan/Notepad',
    demo: "https://dribbble.com/shots/18469955-Notepad"
  },
  {
    id: 6,
    image: gymSystem,
    title: "Gym Management System (C#, .Net, Access DB)",
    github: 'https://github.com/Shukrullah-Jan/Gym-Management-System',
    demo: "https://dribbble.com/shots/18469933-Gym-management-system"
  }
]

const Portfolio = () => {

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({ id, image, title, github, demo }) => {

            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target="_blank">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>

                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio