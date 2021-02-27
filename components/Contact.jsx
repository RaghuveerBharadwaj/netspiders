import { useState } from 'react'

export const Contact = () => {
  const [form, setForm] = useState({})
  const [pic, setPic] = useState("")
  const [error, setError] = useState({})


  const handleChange = e => {
    setPic("-typing")
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
    Object.keys(err)?.length > 0
      ? setPic("-err")
      : setPic("-yes")
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
          setForm({})
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  return (
    <div className="contact" id="contact">
      <img className="blur-img" src="contact.svg" alt="Contact Us" />
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>Have a question for us? Drop us a message and we will get back to you at the earliest.</p>
      </div>
      <div className="flex">
        <img className="contact-img" src="contact.png" alt="Contact Us" />
        <div className="form">
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
