import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className='contact-form'>
        <h2 className='fade-in'>Contact Us</h2>
        <form className=''>
   <input type="text" placeholder='full name' required/>
   <input type="email" placeholder='email adressed'required/>
   <input type="text"placeholder='phone number' required/>
   <textarea placeholder='your message' rows={5} required></textarea>

   <button type='submit'>Send message</button>
        </form>
      </section>

    </div>
  )
}

export default Contact
