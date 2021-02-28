import { useState } from 'react'
import { CustomConfetti } from './Confetti'
import { Flip } from 'react-reveal'

export const Contact = () => {
  const [form, setForm] = useState({})
  const [error, setError] = useState({})
  const [isConfetti, setIsConfetti] = useState(false)

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const errorCheck = () => {
    let err = {}
    const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const regPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if (!form.name) {
      err = {
        ...err,
        name: "Please enter your name"
      }
    }
    if (!regEmail.test(String(form.email).toLowerCase())) {
      err = {
        ...err,
        email: "Please enter valid email"
      }
    }
    if (!regPhone.test(String(form.phone).toLowerCase())) {
      err = {
        ...err,
        phone: "Please enter valid phone number"
      }
    }
    if (!form.message) {
      err = {
        ...err,
        message: "Please enter a message"
      }
    }
    setError(err)
    return err
  }

  const postMessage = async () => {
    const err = errorCheck()
    if (!Object.keys(err)?.length > 0) {
      await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_ju8r1uc',
          template_id: 'template_0vzrcxi',
          user_id: 'user_wjh2kZnmiZKq6a2dD7nUP',
          template_params: form
        })
      })
        .then((rep) => {
          setForm({
            name: "",
            email: "",
            phone: "",
            message: ""
          })
          setIsConfetti(true)
          setTimeout(() => setIsConfetti(false), 500)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  const confettiDispersion = [
    { top: '50px', left: '20%' },
    { bottom: '50px', left: '20%' },
    { top: '50px', left: '80%' },
    { bottom: '50px', left: '80%' },
    { top: '50%', left: '50%' },
  ]

  return (
    <div className="contact" id="contact">
      <img className="blur-img" src="contact.svg" alt="Contact Us" />
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>Have a question for us? Drop us a message and we will get back to you at the earliest.</p>
      </div>
      {confettiDispersion.map((style, i) =>
        <div key={i} style={style} className="confetti">
          <CustomConfetti isActive={isConfetti} />
        </div>)}
      <div className="flex">
      <Flip ssrFadeout>
        <img className="contact-img" src="contact.svg" alt="Contact Us" />
        </Flip>
        <div id="form" className="form">
          <div className="full">
            <label htmlFor="name">Name</label>
            <input className={error.name && "error"} placeholder="James Bond" name="name" onChange={handleChange} value={form.name} type="text" />
            <span>{error.name}</span>
          </div>
          <div className="half">
            <label htmlFor="email">Email</label>
            <input className={error.email && "error"} placeholder="james@gmail.com" name="email" onChange={handleChange} value={form.email} type="email" />
            <span>{error.email}</span>
          </div>
          <div className="half">
            <label htmlFor="phone">Phone Number</label>
            <input className={error.phone && "error"} placeholder="9876543210" name="phone" onChange={handleChange} value={form.phone} type="tel" />
            <span>{error.phone}</span>
          </div>
          <div className="full">
            <label htmlFor="message">Message</label>
            <textarea className={error.message && "error"} placeholder="Type your message..." name="message" onChange={handleChange} value={form.message} type="text" />
            <span>{error.message}</span>
          </div>
          <div className="full">
            <button onClick={postMessage}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
