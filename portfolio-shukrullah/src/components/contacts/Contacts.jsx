
import React from 'react'
import './contacts.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contacts = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bgb3li1', 'template_vye0qfv', form.current, '-mpO1yvtOTUx_RDvc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };


    return (
        <section id='contacts'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5 className='contact__option-email'>Almehdipco6766@gmail.com</h5>
                        <a href="mailto:almehdipco6766@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>معراج عباس</h5>
                        <a href="https://m.me/Meraj.askarii" target="_blank">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+923362073245</h5>
                        {/* <a href="https://api.whatsapp.com/send?phone=00923362073245" target="_blank">Send a message</a> */}
                        <a href="https://wa.me/923362073245" target="_blank">Send a message</a>
                    </article>
                </div>
                {/* End of Contact Option */}

                <form ref={form} onSubmit={sendEmail}>

                    <input type="text" name='name' placeholder='Your full name' required />
                    <input type="email" name='email' placeholder='Your email' required />
                    <textarea name="message" rows="7" placeholder='Your message...' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contacts