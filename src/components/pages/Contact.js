import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';
import { init, sendForm } from '@emailjs/browser';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`Please enter your ${e.target.name}.`);
            } else {
                setErrorMessage('');
            }
        }

        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value});
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        // initialize EmailJS
        init("user_5nPCOgMVPDrW07DFPNMF4");

        sendForm('service_b0j23lk', 'contact_form', document.getElementById('contact-form'))
            .then(() => {
                console.log('success');
            }, (error) => {
                console.log('failed: ', error);
            });
    }

    return (
        <div>
            <h2 className='py-2'>Contact</h2>
            <form id='contact-form' onSubmit={handleSubmit}>
            <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" onBlur={handleChange} defaultValue={email} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" onBlur={handleChange} defaultValue={message}  />
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button data-testid="submit-button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;