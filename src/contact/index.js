import React, { useState } from 'react';
import { Axios, db } from '../firebase/firebaseConfig';
import '../App.css'

const ContactForm = () => {
    const [formData, setFormData] = useState({})

    const updateInput = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = event => {
        event.preventDefault()
        sendEmail()
        setFormData({
            name: '',
            email: '',
            message: '',
        })
    }
    const sendEmail = () => {
        Axios.post(
            'https://us-central1-portfolio-e79bb.cloudfunctions.net/submit',
            formData
        )
            .then(res => {
                db.collection('emails').add({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    time: new Date(),
                })
                alert("Your message has been sent. Thank you!")
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>Send Me a Message</h3>
                <input
                    className="inputClass"
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={updateInput}
                    value={formData.name || ''}
                /><br />
                <input
                    className="inputClass"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={updateInput}
                    value={formData.email || ''}
                /><br />
                <textarea
                    type="text"
                    name="message"
                    placeholder="Message"
                    onChange={updateInput}
                    value={formData.message || ''}
                ></textarea><br />
                <button className="submitBtn" type="submit">Submit</button>
            </form>
        </>
    )
}

export default ContactForm