import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/amjadAli.jpg'
import AVT2 from '../../assets/paimanAmini.jpg'
import AVT3 from '../../assets/boy_image.jpeg'
import AVT4 from '../../assets/chamanAliAfzali.jpg'



const data = [
  {
    avatar: AVT1,
    name: "Amjad, Ali",
    review: "Director of Talent at ICS. Specializing in graphic and logo design, and instructing across various fields of computer science."
  },
  {
    avatar: AVT2,
    name: "Paiman, Amini",
    review: "Frontend Developer Specialist and social activist with interests in poetry and photography."
  },
  {
    avatar: AVT3,
    name: "Fareed",
    review: "Inquisitive and dedicated instructor and social activist, teaching across various fields of computer science."
  },
  {
    avatar: AVT4,
    name: "Chaman Ali",
    review: "Computer Science specialist, programmer, and web designer, providing tutoring across various fields of computer science."
  },
]


const Testimonials = () => {

  return (

    <section id='testimonials'>


      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">

        {
          data.map(({ avatar, name, review }, index) => {

            return (
              <article key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt={name + " avatar"} />

                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </article>
            )
          })
        }

      </div>
    </section>
  );
};

export default Testimonials